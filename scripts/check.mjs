import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
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
for(const name of ['styles.css','app.js','logo.svg','references.bib'])assert(fs.existsSync(path.join(root,'docs',name)),'Missing website asset: '+name);
assert(html.includes('https://agentic-videogen.github.io/'),'Incorrect target domain');
for(const p of c.papers)assert(read('README.md').includes(p.title.replace(/\|/g,'\\|').replace(/\[/g,'\\[').replace(/\]/g,'\\]')),'README omitted: '+p.id);
for(const file of ['README.md','DEPLOYMENT.md','CONTRIBUTING.md','docs/index.html','docs/app.js','docs/styles.css','data/catalogue.json'])assert(!/\/Users\/|fanliaoyuandeMacBook|\.codex\/skills|\uFFFD/.test(read(file)),'Private path or broken Unicode: '+file);
console.log(`PASS: ${c.papers.length} unique records; valid links and categories; README/data parity; privacy and website assets.`);
