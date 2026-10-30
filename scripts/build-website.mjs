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
const html=preview
  .replace('<title>Design preview · Agentic VideoGen</title>','<title>Agentic VideoGen — Video Generation Meets Agent Harness</title>')
  .replace(/\s*<meta name="robots" content="noindex">/,'')
  .replaceAll('agentic-videogen:preview-opening:v2','agentic-videogen:studio-opening:v2');
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
console.log('Production website ready: build/website/ (local preview retained).');
