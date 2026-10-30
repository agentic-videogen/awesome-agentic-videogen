// Publish the approved design without overwriting the separate local preview.
import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
for(const script of ['build.mjs','check.mjs','build-preview.mjs']){
  execFileSync(process.execPath,[path.join(root,'scripts',script)],{cwd:root,stdio:'inherit'});
}
const docs=path.join(root,'docs'),output=path.join(root,'build/website');
const people=JSON.parse(fs.readFileSync(path.join(root,'data/people.json'),'utf8'));
const preview=fs.readFileSync(path.join(docs,'preview.html'),'utf8');
let html=preview
  .replace('<title>Design preview · Agentic VideoGen</title>','<title>Agentic VideoGen — Video Generation Meets Agent Harness</title>')
  .replace(/\s*<meta name="robots" content="noindex">/,'')
  .replaceAll('agentic-videogen:preview-opening:v2','agentic-videogen:studio-opening:v2');
// The browser uploader can fail on large SVGs. This optional package needs only
// index.html to deploy; all interactive code and the catalogue stay self-contained.
if(process.argv.includes('--inline')){
  const assetBase='https://raw.githubusercontent.com/agentic-videogen/awesome-agentic-videogen/1392608310e3da2cb2c9ae19e21c84095cc12238/docs/';
  const json=fs.readFileSync(path.join(docs,'catalogue.json'),'utf8').replaceAll('<','\\u003c');
  html=html.replace('<script src="app.js" type="module"></script>',`<script id="bundled-catalogue" type="application/json">${json}</script>\n<script src="app.js" type="module"></script>`);
  html=html.replace(/<link rel="stylesheet" href="([^"]+)">/g,(_tag,file)=>`<style data-bundled-style="${file}">\n${fs.readFileSync(path.join(docs,file),'utf8')}</style>`);
  html=html.replace(/<script src="([^"]+)" type="module"><\/script>/g,(_tag,file)=>{
    let script=fs.readFileSync(path.join(docs,file),'utf8');
    if(file==='app.js')script=script.replace("const response=await fetch('./catalogue.json');if(!response.ok)throw Error('Catalogue unavailable');\n  catalogue=await response.json();","catalogue=JSON.parse(document.getElementById('bundled-catalogue').textContent);");
    if(/<\/script/i.test(script))throw new Error('Unsafe closing script tag in '+file);
    return `<script type="module" data-bundled-script="${file}">\n${script}</script>`;
  });
  for(const file of [...new Set(['logo.svg','preview-figure2.svg',...people.institutions.map(i=>i.logo)])]){
    html=html.replaceAll(`src="${file}"`,`src="${assetBase+file}"`).replaceAll(`href="${file}"`,`href="${assetBase+file}"`);
  }
  for(const file of ['survey.bib','references.bib'])html=html.replaceAll(`href="${file}"`,`href="data:text/plain;charset=utf-8,${encodeURIComponent(fs.readFileSync(path.join(docs,file),'utf8')).replaceAll("'",'%27')}"`);
}
const assets=[...new Set([
  'styles.css','app.js','logo.svg','references.bib','catalogue.json','survey.bib',
  'preview-design.css','preview-design.js','preview-studio.css',
  'preview-tree.css','preview-tree.js','preview-figure2.svg',
  ...people.institutions.map(i=>i.logo),
])];
fs.mkdirSync(output,{recursive:true});
fs.writeFileSync(path.join(output,'index.html'),html);
for(const name of assets){
  if(path.basename(name)!==name)throw new Error('Expected a root-level website asset: '+name);
  fs.copyFileSync(path.join(docs,name),path.join(output,name));
}
fs.writeFileSync(path.join(output,'.nojekyll'),'');
execFileSync(process.execPath,[path.join(root,'scripts/check-website.mjs'),output],{cwd:root,stdio:'inherit'});
console.log('Production website ready: build/website/'+(process.argv.includes('--inline')?' (single-page package)':'')+' (local preview retained).');
