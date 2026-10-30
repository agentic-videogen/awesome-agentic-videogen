import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {renderSurveyComparison} from './survey-comparison.mjs';
import {renderResourceBadges} from './link-badges.mjs';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const catalogue = JSON.parse(fs.readFileSync(path.join(root, 'data/catalogue.json'), 'utf8'));
const tracks = JSON.parse(fs.readFileSync(path.join(root, 'data/tracks.json'), 'utf8'));
const people = JSON.parse(fs.readFileSync(path.join(root, 'data/people.json'), 'utf8'));
const comparison = JSON.parse(fs.readFileSync(path.join(root, 'data/survey-comparison.json'), 'utf8'));
const htmlEscape = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const peopleMarkup = `
      <div class="survey-people">
        <ul class="authors" aria-label="Survey authors, in manuscript order">
${people.authors.map(a => `          <li>${htmlEscape(a.name)}${a.equalContribution ? `<sup aria-label="equal contribution">${htmlEscape(people.markers.equalContribution)}</sup>` : ''}${a.corresponding ? `<sup aria-label="corresponding author">${htmlEscape(people.markers.corresponding)}</sup>` : ''}</li>`).join('\n')}
        </ul>
        <ul class="affiliations" aria-label="Participating institutions, in manuscript order">
${people.institutions.map(i => `          <li><${i.url ? 'a' : 'div'} class="affiliation" data-institution="${i.id}"${i.url ? ` href="${htmlEscape(i.url)}" target="_blank" rel="noopener noreferrer"` : ''}><span class="affiliation-logo"><img src="${htmlEscape(new URL(i.logo,people.logoAssetBase).href)}" alt="${htmlEscape(i.name)} logo" decoding="async"></span></${i.url ? 'a' : 'div'}></li>`).join('\n')}
        </ul>
        <p class="author-notes"><span><b>${htmlEscape(people.markers.equalContribution)}</b>Equal contribution</span><span><b>${htmlEscape(people.markers.corresponding)}</b>Corresponding author</span></p>
      </div>
      `;
const indexPath = path.join(root, 'docs/index.html');
const indexSource = fs.readFileSync(indexPath, 'utf8');
if (!/<!-- people:start -->[\s\S]*?<!-- people:end -->/.test(indexSource)) throw new Error('Missing author-block build markers');
const coverStyle=fs.readFileSync(path.join(root,'docs/cover.css'),'utf8');
if(!/<!-- cover:start -->[\s\S]*?<!-- cover:end -->/.test(indexSource))throw new Error('Missing cover-style build markers');
const comparisonStyle=fs.readFileSync(path.join(root,'docs/comparison.css'),'utf8');
if(!/<!-- comparison:start -->[\s\S]*?<!-- comparison:end -->/.test(indexSource))throw new Error('Missing comparison build markers');
const studioStyle=fs.readFileSync(path.join(root,'docs/studio-intro.css'),'utf8');
const studioMarkup=fs.readFileSync(path.join(root,'docs/studio-intro.html'),'utf8');
const studioScript=fs.readFileSync(path.join(root,'docs/studio-intro.js'),'utf8');
for(const marker of ['studio-style','studio'])if(!new RegExp(`<!-- ${marker}:start -->[\\s\\S]*?<!-- ${marker}:end -->`).test(indexSource))throw new Error('Missing studio build marker: '+marker);
if(/<\/script/i.test(studioScript))throw new Error('Unsafe closing script tag in studio source');
fs.writeFileSync(indexPath, indexSource
  .replace(/(<!-- people:start -->)[\s\S]*?(<!-- people:end -->)/, `$1${peopleMarkup}$2`)
  .replace(/(<!-- cover:start -->)[\s\S]*?(<!-- cover:end -->)/, `$1\n  <style id="survey-cover-style">\n${coverStyle}</style>\n  $2`)
  .replace(/(<!-- comparison-style:start -->)[\s\S]*?(<!-- comparison-style:end -->)/,`$1\n  <style id="survey-comparison-style">\n${comparisonStyle}</style>\n  $2`)
  .replace(/(<!-- comparison:start -->)[\s\S]*?(<!-- comparison:end -->)/,`$1${renderSurveyComparison(comparison,htmlEscape)}$2`)
  .replace(/(<!-- studio-style:start -->)[\s\S]*?(<!-- studio-style:end -->)/,`$1\n  <style id="studio-intro-style">\n${studioStyle}</style>\n  $2`)
  .replace(/(<!-- studio:start -->)[\s\S]*?(<!-- studio:end -->)/,`$1\n${studioMarkup}<script id="studio-intro-script">\n${studioScript}</script>\n  $2`));
const repo = 'https://github.com/agentic-videogen/awesome-agentic-videogen';
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const escape = s => String(s).replace(/\|/g, '\\|').replace(/\[/g, '\\[').replace(/\]/g, '\\]');
const list = ps => ps.map(p => `- [${escape(p.title)}](${p.url}) — **${p.year || 'n.d.'} · ${escape(p.venue)}**<br>\n  ${renderResourceBadges(p)}`).join('\n\n')+'\n';
let readme = `# <img src="docs/logo.svg" alt="Video Rebirth" width="40" height="35" align="top"> Awesome Agentic Video Generation\n\n**Video Generation Meets Agent Harness: A Survey**\n\nAgentic video generation · Agentic world modeling · Recursive self-improvement\n\n[Website](https://agentic-videogen.github.io/) · [Paper](https://arxiv.org/pdf/2610.40191) · [Contribute](${repo}/issues/new?template=add-resource.yml)\n\nA living collection of **${catalogue.papers.length} unique papers and resources**, organized around how the agent harness meets video generation in creation, interaction, and model development. The catalogue also includes shared agent capabilities, foundations, and evaluation resources.\n\nThis repository hosts the companion bibliography and resource links for the survey.\n\n## News\n\n- **2026-10-30:** Our survey is now available on [arXiv](https://arxiv.org/abs/2610.40191).\n\n- **2026-10-28:** Repository released.\n\n## Contents\n\n${tracks.map(t=>`- [${t.title}](#${slug(t.title)})`).join('\n')}\n- [Benchmarks & Evaluation](#benchmarks--evaluation)\n- [Contributing](#contributing)\n\n## Overview\n\n| Reading path | Central question | Scope |\n|:---|:---|:---|\n${tracks.slice(0,3).map(t=>`| **${t.title}** | ${t.question} | ${t.description} |`).join('\n')}\n\nThe three paths are complementary settings, not capability levels. A resource may appear in multiple paths; the headline count is deduplicated. The development path includes mechanisms relevant to future RSI, rather than certifying that every listed system demonstrates RSI.\n\n`;
for (const t of tracks) {
  const ps = catalogue.papers.filter(p=>p.topics.some(x=>x.track===t.id));
  readme += `## ${t.title}\n\n${t.description} **${ps.length} resources.**\n\n`;
  const groups = [...new Set(ps.flatMap(p=>p.topics.filter(x=>x.track===t.id).map(x=>x.group)))];
  for (const group of groups) {
    const groupPapers = ps.filter(p=>p.topics.some(x=>x.track===t.id&&x.group===group));
    readme += `### ${group}\n\n${list(groupPapers)}\n`;
  }
}
const benchmarks = catalogue.papers.filter(p=>p.type==='Benchmark');
readme += `## Benchmarks & Evaluation\n\nEvaluation resources from across the reading paths.\n\n${list(benchmarks)}\n## Contributing\n\nSuggest a paper, project, dataset, benchmark, or metadata correction through an [issue](${repo}/issues/new?template=add-resource.yml) or pull request. Include a primary paper/resource URL and a reading path. Code and project links should be official.\n\nBibliographic records were assembled from the survey bibliography. Source-checked timeline metadata is reused where available; other records retain their bibliography metadata. Inclusion does not imply endorsement, and missing code links do not imply that code is unavailable. Corrections are welcome.\n\n## Acknowledgements\n\nInspired by [Awesome-Video-Diffusion](https://github.com/showlab/Awesome-Video-Diffusion) and [Awesome Agentic World Modeling](https://github.com/matrix-agent/awesome-agentic-world-modeling).\n`;
fs.writeFileSync(path.join(root, 'README.md'), readme, 'utf8');
fs.mkdirSync(path.join(root, 'docs'), {recursive:true});
fs.writeFileSync(path.join(root, 'docs/catalogue.json'), JSON.stringify({...catalogue,tracks})+'\n','utf8');
const brace=s=>String(s).replace(/[{}]/g,'').replace(/[%&#_$]/g,c=>'\\'+c);
const bib = catalogue.papers.map(p=>`@misc{${p.id},\n  title = {{${brace(p.title)}}},\n  author = {${brace(p.authors)}},\n${p.year?`  year = {${p.year}},\n`:''}  url = {${p.url}}\n}`).join('\n\n');
fs.writeFileSync(path.join(root, 'docs/references.bib'), bib+'\n','utf8');
console.log(`Built README and website data: ${catalogue.papers.length} unique records, ${benchmarks.length} benchmarks.`);
