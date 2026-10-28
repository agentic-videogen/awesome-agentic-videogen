import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const [repository,revision]=process.argv.slice(2);
if(!repository||!revision)throw new Error('Usage: node scripts/import-survey-comparison.mjs <manuscript-repository> <commit>');
const show=file=>execFileSync('git',['show',`${revision}:${file}`],{cwd:repository,encoding:'utf8'});
const commit=execFileSync('git',['rev-parse',`${revision}^{commit}`],{cwd:repository,encoding:'utf8'}).trim();
const sourcePath='tables/survey_comparison_overview.tex';
const tex=show(sourcePath);
const bibliography=['references.bib','references_agent_design.bib','references_world_model_additions.bib'].map(show).join('\n');
const entries=new Map([...bibliography.matchAll(/^@\w+\s*\{([^,]+),([\s\S]*?)(?=^@|$(?![\s\S]))/gm)].map(m=>[m[1].trim(),m[2]]));
const catalogue=JSON.parse(fs.readFileSync(path.join(root,'data/catalogue.json'),'utf8'));
const states={Yes:'systematic',Partial:'partial',No:'outside'};
const groups=[];
let ours;
for(const line of tex.split('\n')){
  const group=line.match(/\\bfseries\\itshape ([^}]+)\}\}/);
  if(group){groups.push({name:group[1],rows:[]});continue;}
  if(!/ & 20\d\d & /.test(line))continue;
  const cells=line.split(' & ');
  const citation=cells[0].match(/\\citep\{([^}]+)\}/)?.[1];
  const coverage=[...line.matchAll(/\\scOverview(Yes|Partial|No)\b/g)].map(m=>states[m[1]]);
  if(coverage.length!==6)throw new Error('Expected six coverage cells: '+line);
  const year=Number(cells[1]);
  if(!citation){
    if(!cells[0].includes('Ours'))throw new Error('Unrecognized uncited row');
    ours={title:'Ours',year,coverage};continue;
  }
  const paper=catalogue.papers.find(p=>p.id===citation||p.aliases?.includes(citation));
  const entry=entries.get(citation)||'';
  const url=entry.match(/\burl\s*=\s*\{([^}]+)\}/i)?.[1]||paper?.url;
  if(!url||!/^https?:\/\//.test(url))throw new Error('Missing paper URL: '+citation);
  const title=cells[0].replace(/~?\\citep\{[^}]+\}/,'').replace(/\\&/g,'&').trim();
  if(/[{}\\]/.test(title))throw new Error('Unconverted title: '+title);
  groups.at(-1).rows.push({citation,title,year,url,coverage});
}
if(!ours||groups.length!==11||groups.reduce((n,g)=>n+g.rows.length,0)!==52)throw new Error('Unexpected Table 1 structure');
const data={
  source:{manuscriptCommit:commit,path:sourcePath,importedOn:'2026-10-28'},
  caption:'Comparison with related literature',
  columns:[{label:'Video Generation',group:'Scope'},{label:'World Models',group:'Scope'},{label:'Model Development',group:'Thematic Coverage'},{label:'Agentic Video Generation',group:'Thematic Coverage'},{label:'Agent–World Interaction',group:'Thematic Coverage'},{label:'Agentic Design',group:null}],
  notes:'Agentic Design covers agent-based methods; thematic coverage includes enabling methods. Years indicate first release (Ours: manuscript year), and coverage follows the cited version. Titles are abbreviated. Video-RSI is a method paper, so its symbols indicate method scope.',
  groups,ours
};
fs.writeFileSync(path.join(root,'data/survey-comparison.json'),JSON.stringify(data,null,2)+'\n');
console.log(`Imported Table 1: 52 studies + Ours, ${groups.length} families, manuscript ${commit.slice(0,7)}.`);
