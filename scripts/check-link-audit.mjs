import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {githubRepositorySlug} from './link-badges.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');

export function checkLinkAudit(){
  const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
  const catalogue=read('data/catalogue.json'),audit=read('data/link-audit.json');
  const papers=new Map(catalogue.papers.map(p=>[p.id,p]));
  assert.equal(audit.records.length,papers.size,'Audit must cover the entire catalogue');
  assert.equal(new Set(audit.records.map(r=>r.id)).size,papers.size,'Duplicate audit ID');
  assert.equal(audit.checkedOn,catalogue.updated,'Audit date and catalogue update diverged');
  for(const r of audit.records){
    const p=papers.get(r.id);assert(p,'Unknown audit ID: '+r.id);
    assert.equal(p.code,r.code,'Code link differs from reviewed decision: '+r.id);
    assert.equal(p.project,r.project,'Project link differs from reviewed decision: '+r.id);
    assert(r.sources.length,'Missing evidence: '+r.id);
    for(const url of r.sources)assert(['http:','https:'].includes(new URL(url).protocol),'Unsafe evidence URL: '+r.id);
    if(r.code){
      assert(githubRepositorySlug(r.code),'Non-repository code link: '+r.id);
      assert.equal(r.reviewStatus,'verified-author-repository','Unverified code link: '+r.id);
      assert.equal(r.repositoryCheck?.status,200,'Repository availability not checked: '+r.id);
      assert(r.sources.includes(r.repositoryCheck.evidence),'Missing repository evidence: '+r.id);
    }
    if(['announced-not-released','advertised-repository-unavailable','project-only'].includes(r.reviewStatus))assert.equal(r.code,null,'Pending or website-only repository counted as code: '+r.id);
  }
  assert.equal(audit.statistics.linkedRepositories,catalogue.papers.filter(p=>p.code).length,'Incorrect repository count');
  const expected={he2024videoscore:'https://github.com/TIGER-AI-Lab/VideoScore',bansal2024videophy:'https://github.com/Hritikbansal/videophy',nan2024openvid:'https://github.com/NJU-PCALab/OpenVid-1M',matsuda2026slvmeval:'https://github.com/tohoku-nlp/SLVMEval',huang2026vimax:'https://github.com/HKUDS/ViMax',liu2025uve:'https://github.com/bytedance/UVE'};
  for(const[id,url]of Object.entries(expected))assert.equal(papers.get(id).code,url,'Link regression: '+id);
  for(const p of catalogue.papers)assert(!p.code||!p.code.includes('arXiv/html_feedback'),'arXiv platform feedback is not paper code');
  const importer=fs.readFileSync(path.join(root,'scripts/import-survey.mjs'),'utf8');
  assert(importer.includes('auditedLinks.get(key)'),'Importer must preserve reviewed code/project links');
  assert(!importer.includes('code: links.find('),'Importer must not select the first scraped GitHub link');
  console.log('PASS: '+audit.records.length+' link-audit records; '+audit.statistics.linkedRepositories+' verified repository links; evidence, pending-release exclusions and importer safeguards.');
}

if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))checkLinkAudit();
