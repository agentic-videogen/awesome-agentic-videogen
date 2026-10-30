// Read-only discovery. Candidates are not official links until manually reviewed.
// Usage: node scripts/audit-resource-links.mjs MODE /absolute/cache [id,id,...]
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const [mode,cache,selection]=process.argv.slice(2);
if(!['metadata','pages','html','projects'].includes(mode)||!cache||!path.isAbsolute(cache))throw new Error('Expected MODE and an absolute cache directory');
fs.mkdirSync(cache,{recursive:true});
const catalogue=JSON.parse(fs.readFileSync(path.join(root,'data/catalogue.json'),'utf8'));
const papers=catalogue.papers.filter(p=>!selection||selection.split(',').includes(p.id));
const decode=s=>s.replace(/&(?:amp|lt|gt|quot|apos|#39|#x([0-9a-f]+)|#(\d+));/gi,(m,hex,num)=>hex?String.fromCodePoint(parseInt(hex,16)):num?String.fromCodePoint(Number(num)):({'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&apos;':"'",'&#39;':"'"}[m]||m));
const plain=s=>decode(s.replace(/<script\b[\s\S]*?<\/script>/gi,' ').replace(/<style\b[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ')).replace(/\s+/g,' ').trim();
const normalized=s=>plain(s).toLowerCase().replace(/[^a-z0-9]/g,'');
function links(text,source){
  const found=new Map();
  for(const m of decode(text).matchAll(/https?:\/\/[^\s<>"{}\\]+/g)){
    const raw=m[0].replace(/(?:&(?:quot|gt|lt);.*)$/,'').replace(/[),.;\]}]+$/g,'');
    let url;try{url=new URL(raw);}catch{continue;}
    if(url.hostname==='github.com'&&/^(?:\/arXiv\/html_feedback|\/login|\/signup|\/share|\/search|\/features|\/sponsors)/i.test(url.pathname))continue;
    if(!['github.com','gitlab.com','huggingface.co'].includes(url.hostname)&&!url.hostname.endsWith('.github.io'))continue;
    const value=url.href;
    if(!found.has(value))found.set(value,{url:value,source,context:plain(decode(text).slice(Math.max(0,m.index-220),m.index+m[0].length+300))});
  }
  return [...found.values()];
}
const wait=ms=>new Promise(r=>setTimeout(r,ms));
async function get(url){
  for(let attempt=0;attempt<2;attempt++)try{
    const response=await fetch(url,{signal:AbortSignal.timeout(20000),headers:{'User-Agent':'AgenticVideoGen-Bibliography-Link-Audit/1.0'}});
    if(response.status===429){return {url,status:429,error:'Rate limited; stop and retry later'};}
    const type=response.headers.get('content-type')||'';
    if(!/text|xml|json/.test(type))return {url:response.url,status:response.status,type,error:'Not a text source'};
    return {url:response.url,status:response.status,type,text:await response.text()};
  }catch(error){if(attempt) return {url,error:error.message};await wait(1500);}
}
if(mode==='metadata'){
  const file=path.join(cache,'metadata.json');
  const all=fs.existsSync(file)?JSON.parse(fs.readFileSync(file,'utf8')):{};
  const pending=papers.filter(p=>p.arxiv&&!all[p.id]);
  for(let n=0;n<pending.length;n+=40){
    if(n)await wait(3100);
    const batch=pending.slice(n,n+40);
    const url='https://export.arxiv.org/api/query?id_list='+batch.map(p=>p.arxiv).join(',')+'&max_results=40';
    const result=await get(url);
    if(result.status!==200){console.log(JSON.stringify({failed:url,status:result.status,error:result.error}));continue;}
    const entries=[...result.text.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map(m=>m[1]);
    for(const entry of entries){
      const arxiv=entry.match(/<id>https?:\/\/arxiv.org\/abs\/(\d{4}\.\d{4,5})/)?.[1];
      const p=batch.find(p=>p.arxiv===arxiv);if(!p)continue;
      const title=decode(entry.match(/<title>([\s\S]*?)<\/title>/)?.[1]||'').replace(/\s+/g,' ').trim();
      const comment=decode(entry.match(/<arxiv:comment>([\s\S]*?)<\/arxiv:comment>/)?.[1]||'');
      const summary=decode(entry.match(/<summary>([\s\S]*?)<\/summary>/)?.[1]||'');
      all[p.id]={arxiv,title,titleMatches:normalized(title)===normalized(p.title),comment,summary,candidates:links(comment+'\n'+summary,'https://arxiv.org/abs/'+arxiv)};
    }
    fs.writeFileSync(file,JSON.stringify(all,null,2)+'\n');
    console.log(JSON.stringify({done:Math.min(n+40,pending.length),total:pending.length,records:Object.keys(all).length,candidates:Object.values(all).filter(p=>p.candidates.length).length}));
  }
}else{
  const file=path.join(cache,mode+'.json');
  const all=fs.existsSync(file)?JSON.parse(fs.readFileSync(file,'utf8')):{};
  const metadata=fs.existsSync(path.join(cache,'metadata.json'))?JSON.parse(fs.readFileSync(path.join(cache,'metadata.json'),'utf8')):{};
  const html=fs.existsSync(path.join(cache,'html.json'))?JSON.parse(fs.readFileSync(path.join(cache,'html.json'),'utf8')):{};
  const metaProject=p=>{
    const meta=metadata[p.id]||{};
    const candidates=[...(meta.comment||'').matchAll(/https?:\/\/[^\s<>"{}\\]+/g)].map(m=>m[0].replace(/[),.;\]}]+$/g,''));
    return candidates.find(url=>!/(?:arxiv.org|github.com|doi.org)\//i.test(url))||(meta.candidates||[]).find(c=>new URL(c.url).hostname.endsWith('.github.io'))?.url||html[p.id]?.candidates.find(c=>new URL(c.url).hostname.endsWith('.github.io'))?.url||null;
  };
  let jobs=papers.map(p=>({p,url:mode==='html'&&p.arxiv?'https://arxiv.org/html/'+p.arxiv:mode==='projects'?(metaProject(p)||p.project):p.url})).filter(j=>j.url&&(!all[j.p.id]||(mode==='projects'&&all[j.p.id].source!==j.url)));
  if(mode==='html')jobs=jobs.filter(j=>j.p.arxiv&&!metadata[j.p.id]?.candidates.some(c=>/github.com\//.test(c.url)));
  let index=0,done=0;
  async function worker(){
    while(index<jobs.length){
      const {p,url}=jobs[index++];
      const result=await get(url);
      let body=result.text||'';
      const title=plain(body.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]||'');
      if(mode==='pages'&&p.arxiv){
        body=(body.match(/<blockquote[^>]*class="abstract[\s\S]*?<\/blockquote>/i)?.[0]||'')+'\n'+(body.match(/<td[^>]*class="tablecell comments[\s\S]*?<\/td>/i)?.[0]||'');
      }else if(mode==='html'){
        body=body.split(/<section\b[^>]*class="[^"]*ltx_bibliography|<section\b[^>]*id="bib|<div\b[^>]*class="[^"]*ltx_bibliography/i)[0];
      }
      all[p.id]={source:url,url:result.url,status:result.status,title,error:result.error,candidates:links(body,url)};
      fs.writeFileSync(file,JSON.stringify(all,null,2)+'\n');
      done++;console.log(JSON.stringify({done,total:jobs.length,id:p.id,status:result.status,candidates:all[p.id].candidates.length,error:result.error}));
      if(result.status===429){index=jobs.length;break;}
      await wait(600);
    }
  }
  await Promise.all([worker(),worker()]);
}
