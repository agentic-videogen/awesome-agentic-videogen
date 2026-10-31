import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
import {renderSurveyComparison} from './survey-comparison.mjs';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const output=process.argv[2]?path.resolve(process.argv[2]):path.join(root,'build/website');
const read=name=>fs.readFileSync(path.join(output,name),'utf8');
const html=read('index.html');
assert(html.includes('<title>Agentic VideoGen — Video Generation Meets Agent Harness</title>'),'Missing production title');
assert(!/noindex|Design preview|preview-opening:v2|127\.0\.0\.1|localhost|\/Users\/|\.codex/.test(html),'Preview/private settings in published HTML');
assert(fs.existsSync(path.join(output,'.nojekyll')),'Static GitHub Pages marker missing');
const catalogue=JSON.parse(read('catalogue.json'));
assert.deepEqual(catalogue.papers,JSON.parse(fs.readFileSync(path.join(root,'data/catalogue.json'),'utf8')).papers,'Production catalogue is stale');
const people=JSON.parse(fs.readFileSync(path.join(root,'data/people.json'),'utf8'));
const authors=html.match(/<section class="people-section"[\s\S]*?<\/section>/)?.[0];
assert(authors,'Missing author section');
let position=-1;
for(const author of people.authors){const next=authors.indexOf(author.name);assert(next>position,'Missing/reordered author: '+author.name);position=next;}
assert.equal((html.match(/class="tree-node"/g)||[]).length,96,'Research tree links missing');
assert.equal((html.match(/data-citation=/g)||[]).length,52,'Table 1 studies missing');
const comparison=JSON.parse(fs.readFileSync(path.join(root,'data/survey-comparison.json'),'utf8'));
const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
assert(html.includes(renderSurveyComparison(comparison,escape)),'Published Table 1 differs from the checked paper data');
assert(!/<dialog[^>]+\bopen(?:\s|>|=)/.test(html),'Opening must remain closed without JavaScript');
const opening=html.match(/<script id="studio-intro-script">([\s\S]*?)<\/script>/)?.[1];
assert(opening?.includes('sessionStorage.'),'Approved opening session behavior changed');
assert(opening.includes('agentic-videogen:studio-opening:v2'),'Production opening key missing');
new vm.Script(opening);
assert(html.includes('studio-art workstudio-art'),'New robot is missing from the opening');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
assert.equal(new Set(ids).size,ids.length,'Duplicate HTML IDs');
for(const match of html.matchAll(/href="#([^"]+)"/g))assert(ids.includes(match[1]),'Broken anchor: '+match[1]);
for(const match of html.replace(/<script\b[\s\S]*?<\/script>/gi,'').matchAll(/\b(?:src|href)="([^"]+)"/g)){
  const url=match[1];
  if(/^(?:https?:|mailto:|data:|#)/.test(url))continue;
  const file=decodeURIComponent(url.split(/[?#]/)[0]);
  assert(file&&!file.includes('..')&&fs.existsSync(path.join(output,file)),'Missing local asset: '+url);
}
for(const file of ['preview-design.css','preview-studio.css','preview-tree.css'])assert(!/url\(/.test(read(file)),'Review new external CSS assets before publication');
const svg=read('preview-figure2.svg');
assert(/<svg\b/.test(svg)&&!/<script|<foreignObject|\bonload\s*=/i.test(svg),'Invalid or active research-tree SVG');
assert.equal(read('survey.bib').trim(),fs.readFileSync(path.join(root,'citation.bib'),'utf8').trim(),'Survey citation is stale');
if(html.includes('id="bundled-catalogue"')){
  const bundled=JSON.parse(html.match(/<script id="bundled-catalogue" type="application\/json">([\s\S]*?)<\/script>/)[1]);
  assert.deepEqual(bundled,catalogue,'Embedded catalogue is stale');
  assert(!/<script[^>]+src=|<link rel="stylesheet"/.test(html),'Single-page deployment still needs external code');
  assert(!html.includes("fetch('./catalogue.json')"),'Single-page deployment still fetches an unversioned catalogue');
  assert(html.includes('1392608310e3da2cb2c9ae19e21c84095cc12238/docs/preview-figure2.svg'),'Research figure must use its reviewed asset revision');
  for(const match of html.matchAll(/<script type="module" data-bundled-script="[^"]+">([\s\S]*?)<\/script>/g))new vm.Script(match[1]);
}
console.log('PASS: production assets, 96 tree links, 52 comparison studies, authors, anchors, catalogue, citation and opening safeguards.');
