import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const args=process.argv.slice(2);
const arxiv=args[0]==='--arxiv';
const [repository,revision,pdf]=arxiv?args.slice(1):args;
if(!repository||!revision||(arxiv&&!pdf))throw new Error('Usage: node scripts/import-survey-comparison.mjs <manuscript-repository> <commit> OR --arxiv <extracted-source-directory> <arxiv-id-with-version> <paper.pdf>');
if(arxiv&&!/^\d{4}\.\d{4,5}v\d+$/.test(revision))throw new Error('Pin an explicit arXiv version');
const show=file=>arxiv?fs.readFileSync(path.join(repository,file),'utf8'):execFileSync('git',['show',`${revision}:${file}`],{cwd:repository,encoding:'utf8'});
const commit=arxiv?null:execFileSync('git',['rev-parse',`${revision}^{commit}`],{cwd:repository,encoding:'utf8'}).trim();
const sourcePath='tables/survey_comparison_overview.tex';
const tex=show(sourcePath);
const bibliography=(arxiv?['main.bib']:['references.bib','references_agent_design.bib','references_world_model_additions.bib']).map(show).join('\n');
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
  if(coverage.length!==(arxiv?7:6))throw new Error('Unexpected coverage cell count: '+line);
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
  source:arxiv?{
    arxiv:revision,url:`https://arxiv.org/pdf/${revision}`,page:6,path:sourcePath,
    snapshot:`data/sources/arxiv-${revision}-table1.tex`,
    tableSha256:createHash('sha256').update(tex).digest('hex'),
    pdfSha256:createHash('sha256').update(fs.readFileSync(pdf)).digest('hex'),
    importedOn:new Date().toISOString().slice(0,10)
  }:{manuscriptCommit:commit,path:sourcePath,importedOn:new Date().toISOString().slice(0,10)},
  caption:arxiv?'Comparison with related surveys and studies':'Comparison with related literature',
  columns:[{label:'Video Generation',group:'Scope'},{label:'World Models',group:'Scope'},{label:'Model Development',group:'Thematic Coverage'},{label:arxiv?'Agentic Video Gen.':'Agentic Video Generation',group:'Thematic Coverage'},{label:'Agent–World Interaction',group:'Thematic Coverage'},...(arxiv?[{label:'RSI',group:'Thematic Coverage'}]:[]),{label:arxiv?'Agent Design':'Agentic Design',group:null}],
  notes:arxiv?'Studies are grouped by primary research focus and compared in terms of scope, thematic coverage, and agent design. Our survey connects agentic video generation, agent–world interaction, and video model development toward Recursive Self-Improvement (RSI) through a unified agent-harness framework.':'Agentic Design covers agent-based methods; thematic coverage includes enabling methods. Years indicate first release (Ours: manuscript year), and coverage follows the cited version. Titles are abbreviated. Video-RSI is a method paper, so its symbols indicate method scope.',
  groups,ours
};
if(arxiv){fs.mkdirSync(path.join(root,'data/sources'),{recursive:true});fs.writeFileSync(path.join(root,data.source.snapshot),tex);}
fs.writeFileSync(path.join(root,'data/survey-comparison.json'),JSON.stringify(data,null,2)+'\n');
console.log(`Imported Table 1: 52 studies + Ours, ${groups.length} families, ${arxiv?'arXiv '+revision:'manuscript '+commit.slice(0,7)}.`);
