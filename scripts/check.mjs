import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import {renderSurveyComparison} from './survey-comparison.mjs';
import {githubRepositorySlug,renderResourceBadges} from './link-badges.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const c=JSON.parse(read('data/catalogue.json')), t=JSON.parse(read('data/tracks.json'));
const ids=new Set(), identities=new Set(), trackIds=new Set(t.map(x=>x.id));
for(const p of c.papers){
  assert(p.id&&!ids.has(p.id),'Duplicate/missing id: '+p.id);ids.add(p.id);
  assert(p.title&&p.url&&p.topics.length,'Incomplete record: '+p.id);
  const identity=p.arxiv||p.title.toLowerCase().replace(/[^a-z0-9]/g,'');assert(!identities.has(identity),'Duplicate paper: '+p.id);identities.add(identity);
  assert(p.year===null||(p.year>=1900&&p.year<=2026),'Invalid year: '+p.id);
  if(p.arxiv)assert(/^(?:0[7-9]|1\d|2[0-6])(?:0[1-9]|1[0-2])\.\d{4,5}$/.test(p.arxiv),'Invalid arXiv ID: '+p.id);
  for(const v of [p.url,p.code,p.project].filter(Boolean)){
    const u=new URL(v);assert(['http:','https:'].includes(u.protocol),'Unsafe link: '+p.id);
    assert(!/mdpi\.com|preprints\.org/.test(u.hostname),'Excluded source: '+p.id);
    assert(!u.href.includes('sites.google.com/corp/'),'Internal-only link: '+p.id);
  }
  assert(p.topics.every(x=>trackIds.has(x.track)&&x.group),'Invalid category: '+p.id);
  assert(!/\\(?:cite|textbf|emph)|\/Users\/|[\uFFFD]/.test(JSON.stringify(p)),'Unconverted/private data: '+p.id);
}
const exported=JSON.parse(read('docs/catalogue.json'));assert.deepEqual(exported.papers,c.papers,'Stale website data');
const html=read('docs/index.html');
const headerBrand=html.match(/<a class="brand"[^>]*>[\s\S]*?<\/a>/)?.[0];
assert(headerBrand?.includes('<img class="brand-logo" src="logo.svg"'),'Header must use the supplied Video Rebirth logo');
assert(headerBrand.includes('AGENTIC <b>VIDEOGEN</b>'),'Header brand text changed');
assert(!headerBrand.includes('brand-symbol'),'Placeholder header logo remains');
for(const name of ['styles.css','cover.css','app.js','logo.svg','references.bib'])assert(fs.existsSync(path.join(root,'docs',name)),'Missing website asset: '+name);
const people=JSON.parse(read('data/people.json'));
assert(new URL(people.logoAssetBase).hostname==='raw.githubusercontent.com','Unexpected institutional asset host');
assert(html.includes(read('docs/cover.css').trim()),'Stale embedded cover styles');
assert.equal(people.institutions[0].id,'video-rebirth','Video Rebirth must appear first');
assert.equal(people.authors.filter(a=>a.equalContribution).length,5,'Equal-contribution author count changed');
assert.equal(people.authors.length,20,'Author count differs from the manuscript');
assert.equal(people.authors.filter(a=>a.corresponding).map(a=>a.name).join(','),'Kevin Qinghong Lin,Mike Zheng Shou,Wei Liu','Corresponding-author mismatch');
assert.deepEqual(people.markers,{equalContribution:'*',corresponding:'✉'},'Author markers differ from the manuscript');
const authorBlock=html.match(/<!-- people:start -->([\s\S]*?)<!-- people:end -->/)?.[1];
assert(authorBlock,'Missing generated author block');
assert(!authorBlock.includes('class="affiliation-name"'),'Institution captions must not appear below logos');
let authorPosition=-1;
for(const a of people.authors){
  const next=authorBlock.indexOf(a.name);assert(next>authorPosition,'Author omitted or out of order: '+a.name);authorPosition=next;
  const authorItem=authorBlock.slice(authorBlock.lastIndexOf('<li>',next),authorBlock.indexOf('</li>',next));
  assert.equal(authorItem.includes('aria-label="equal contribution"'),!!a.equalContribution,'Equal-contribution marker mismatch: '+a.name);
  assert.equal(authorItem.includes('aria-label="corresponding author"'),!!a.corresponding,'Corresponding-author marker mismatch: '+a.name);
}
assert.equal((authorBlock.match(/aria-label="equal contribution"/g)||[]).length,5,'Incorrect rendered equal-contribution marks');
assert.equal((authorBlock.match(/aria-label="corresponding author"/g)||[]).length,3,'Incorrect rendered correspondence marks');
assert(!authorBlock.includes('†'),'Outdated corresponding-author symbol remains');
let institutionPosition=-1;
for(const i of people.institutions){
  const next=authorBlock.indexOf(`data-institution="${i.id}"`);assert(next>institutionPosition,'Institution omitted or out of order: '+i.name);institutionPosition=next;
  assert(authorBlock.includes(new URL(i.logo,people.logoAssetBase).href),'Incorrect institution asset URL: '+i.name);
  const logo=fs.readFileSync(path.join(root,'docs',i.logo));
  if(i.logo.endsWith('.svg')){assert(/<svg\b/.test(logo.toString()),'Invalid SVG logo: '+i.logo);assert(!/<script|<foreignObject|\bonload\s*=/i.test(logo.toString()),'Active SVG content: '+i.logo);}
  else if(i.logo.endsWith('.png'))assert.equal(logo.subarray(0,8).toString('hex'),'89504e470d0a1a0a','Invalid PNG logo: '+i.logo);
  else if(i.logo.endsWith('.jpg'))assert.equal(logo.subarray(0,3).toString('hex'),'ffd8ff','Invalid JPEG logo: '+i.logo);
  else if(i.logo.endsWith('.ico'))assert.equal(logo.subarray(0,4).toString('hex'),'00000100','Invalid icon logo: '+i.logo);
  else if(i.logo.endsWith('.webp')){assert.equal(logo.subarray(0,4).toString(),'RIFF','Invalid WebP logo: '+i.logo);assert.equal(logo.subarray(8,12).toString(),'WEBP','Invalid WebP logo: '+i.logo);}
}
assert(html.includes('Find your next paper.'),'Requested library title changed');
const comparison=JSON.parse(read('data/survey-comparison.json'));
assert.equal(comparison.source.manuscriptCommit,'63d5fc5680c2bb2cdca3f6249a72dd484d97ebdc','Unreviewed Table 1 source revision');
assert.equal(comparison.columns.length,6,'Table 1 coverage dimensions changed');
assert.equal(comparison.groups.length,11,'Table 1 families changed');
const comparisonRows=comparison.groups.flatMap(g=>g.rows);
assert.equal(comparisonRows.length,52,'Table 1 study count changed');
assert.equal(new Set(comparisonRows.map(r=>r.citation)).size,52,'Duplicate Table 1 citation');
for(const r of [...comparisonRows,comparison.ours]){
  assert(r.title&&r.year>=2021&&r.year<=2026,'Invalid Table 1 title/year');
  assert.equal(r.coverage.length,6,'Incomplete coverage row: '+r.title);
  assert(r.coverage.every(s=>['systematic','partial','outside'].includes(s)),'Invalid Table 1 coverage: '+r.title);
  if(r.url)assert(['https:','http:'].includes(new URL(r.url).protocol),'Unsafe Table 1 URL');
}
const comparisonBlock=html.match(/<!-- comparison:start -->([\s\S]*?)<!-- comparison:end -->/)?.[1];
const htmlEscape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
assert.equal(comparisonBlock,renderSurveyComparison(comparison,htmlEscape),'Stale Table 1 markup');
assert(html.includes(read('docs/comparison.css').trim()),'Stale Table 1 styles');
assert.equal((comparisonBlock.match(/data-citation=/g)||[]).length,52,'Missing Table 1 rows');
assert.equal((comparisonBlock.match(/class="coverage-mark /g)||[]).length,321,'Missing coverage cells/legend');
assert(comparisonBlock.includes('Video-RSI: Harness Evolution (method)'),'Adjacent method omitted');
assert(html.includes('href="#comparison"'),'Missing Table 1 navigation');
assert.equal(t.find(x=>x.id==='development').title,'RSI in Video Generation','Incorrect RSI title');
assert.deepEqual(exported.tracks,t,'Stale website track names');
assert(html.includes('https://agentic-videogen.github.io/'),'Incorrect target domain');
for(const p of c.papers)assert(read('README.md').includes(p.title.replace(/\|/g,'\\|').replace(/\[/g,'\\[').replace(/\]/g,'\\]')),'README omitted: '+p.id);
assert.equal(githubRepositorySlug('https://github.com/showlab/MovieAgent/'),'showlab/MovieAgent');
assert.equal(githubRepositorySlug('https://github.com/owner/repo.git'),'owner/repo');
assert.equal(githubRepositorySlug('https://github.com/owner/repo/tree/main?tab=readme-ov-file'),'owner/repo');
assert.equal(githubRepositorySlug('https://github.com/owner/repo/blob/main/README.md'),'owner/repo');
for(const link of [null,'not a URL','https://github.com/owner','https://github.com/arXiv/html_feedback/issues','https://github.com/owner/repo/wiki','https://github.com/owner/repo/issues/1','https://github.com.evil.example/owner/repo'])assert.equal(githubRepositorySlug(link),null,'Not a repository code link: '+link);
const example={type:'Paper',url:'https://arxiv.org/abs/2503.07314',code:'https://github.com/showlab/MovieAgent',project:'https://weijiawu.github.io/MovieAgent'};
const exampleBadges=renderResourceBadges(example);
assert(exampleBadges.includes('stars/showlab/MovieAgent.svg?style=social&label=Star'),'Missing live Star badge');
assert(exampleBadges.includes('badge/arXiv-b31b1b.svg'),'Missing red arXiv badge');
assert(exampleBadges.includes('badge/Website-9cf.svg'),'Missing blue Website badge');
assert.equal((exampleBadges.match(/\[!\[/g)||[]).length,3,'Example badge count');
assert(!renderResourceBadges({...example,code:null,project:null}).includes('Star'),'Invented repository badge');
assert(renderResourceBadges({type:'Report',url:'https://example.org/report'}).includes('[![Source]'),'Report mislabeled as arXiv');
assert(renderResourceBadges({type:'Paper',url:'https://doi.org/10.1234/example'}).includes('[![Paper]'),'Missing non-arXiv paper link');
assert(!renderResourceBadges({...example,code:'https://github.com/arXiv/html_feedback/issues'}).includes('stars/'),'Issue list incorrectly assigned repository stars');
const readme=read('README.md');
for(const p of c.papers)assert(readme.includes(renderResourceBadges(p)),'README badges omitted: '+p.id);
const expectedEntryCount=c.papers.reduce((n,p)=>n+p.topics.length,0)+c.papers.filter(p=>p.type==='Benchmark').length;
assert.equal(readme.split('\n').filter(l=>l.startsWith('- [')&&l.includes(' — **')).length,expectedEntryCount,'Resource entry count changed');
assert(!readme.includes('| Year | Paper / resource | Venue / source | Links |'),'Resource table would compress link badges');
for(const file of ['README.md','DEPLOYMENT.md','CONTRIBUTING.md','docs/index.html','docs/app.js','docs/styles.css','docs/cover.css','docs/comparison.css','data/catalogue.json','data/people.json','data/survey-comparison.json'])assert(!/\/Users\/|fanliaoyuandeMacBook|\.codex\/skills|\uFFFD/.test(read(file)),'Private path or broken Unicode: '+file);
console.log(`PASS: ${c.papers.length} unique records; valid links and categories; README/data parity; privacy and website assets.`);
