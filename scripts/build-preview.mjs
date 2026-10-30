// Local design exploration. The published index and its build stay untouched.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {buildResearchTree} from './preview-research-tree.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docs = path.join(root, 'docs');
const original = fs.readFileSync(path.join(docs, 'index.html'), 'utf8');
const researchTree = buildResearchTree(docs);
const comparisonStart = '<!-- comparison:start -->';
if (!original.includes(comparisonStart)) throw new Error('Original comparison section is missing.');
const people = JSON.parse(fs.readFileSync(path.join(root, 'data/people.json'), 'utf8'));
let peopleBlock = original.match(/<!-- people:start -->([\s\S]*?)<!-- people:end -->/)?.[1];
if (!peopleBlock) throw new Error('Original author block is missing.');
for (const institution of people.institutions) {
  peopleBlock = peopleBlock.replace(new URL(institution.logo, people.logoAssetBase).href, institution.logo);
}
const peopleSection = `<section class="people-section" id="authors" aria-label="Survey authors and participating institutions"><div class="wrap"><div class="people-heading"><span class="eyebrow">A COLLABORATIVE RESEARCH SURVEY</span><span>2026 EDITION</span></div>${peopleBlock}</div></section>`;
const contribute = original.match(/<section class="contribute"[\s\S]*?<\/section>/)?.[0];
if (!contribute) throw new Error('Original contribution section is missing.');

const studio = fs.readFileSync(path.join(docs, 'preview-studio.html'), 'utf8');
const studioArtwork = studio.match(/<svg class="workstudio-art"[\s\S]*?<\/svg>/)?.[0];
const originalOpeningArtwork = original.match(/<svg class="studio-art"[\s\S]*?<\/svg>/)?.[0];
if (!studioArtwork || !originalOpeningArtwork) throw new Error('Studio artwork is missing.');
const openingArtwork = studioArtwork
  .replaceAll('workstudio-', 'opening-workstudio-')
  .replace('class="opening-workstudio-art"', 'class="studio-art workstudio-art"');
const originalOpeningScript = fs.readFileSync(path.join(docs, 'studio-intro.js'), 'utf8').trim();
const openingScript = originalOpeningScript
  .replace('agentic-videogen:studio-intro:v1', 'agentic-videogen:preview-opening:v2')
  .replaceAll('localStorage.', 'sessionStorage.');
const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
const surveyBibtex = readme.match(/## Citation[\s\S]*?```bibtex\s*\n([\s\S]*?)```/)?.[1].trim();
if (!surveyBibtex) throw new Error('Survey citation is missing from README.');
const escapeHtml = value => value.replace(/[&<>]/g, char => ({'&': '&amp;', '<': '&lt;', '>': '&gt;'}[char]));
const resourceIcons = {
  paper: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z"/><path d="M14 3v6h6M8 13h8m-8 4h6"/>',
  github: '<path d="M9 19c-4.3 1.3-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.4 6.2-6.5a5.1 5.1 0 0 0-1.4-3.5 4.8 4.8 0 0 0-.1-3.5s-1.2-.4-3.8 1.3a13 13 0 0 0-6.8 0C5.6 1.1 4.4 1.5 4.4 1.5a4.8 4.8 0 0 0-.1 3.5 5.1 5.1 0 0 0-1.4 3.5c0 5.1 3.2 6.2 6.2 6.5a3.4 3.4 0 0 0-.9 2.6V22"/>',
  cite: '<path d="M10 11H5a6 6 0 0 1 5-6M5 11h5v7H4v-5a2 2 0 0 1 1-2Zm15 0h-5a6 6 0 0 1 5-6m-5 6h5v7h-6v-5a2 2 0 0 1 1-2Z"/>',
  hf: '<path d="M4 4h7a4 4 0 0 1 4 3v14a4 4 0 0 0-4-2H4Zm16 0h-3a4 4 0 0 0-2 3v14a4 4 0 0 1 2-2h3ZM7 8h4m-4 4h4"/>',
  reading: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z"/>',
  contact: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/>',
  copy: '<rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3"/>'
};
const resourceIcon = name => `<svg class="resource-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${resourceIcons[name]}</svg>`;

const citation = `
    <section class="survey-citation" id="citation" aria-labelledby="citation-title">
      <div class="wrap">
        <p class="eyebrow">CITE THIS WORK</p>
        <div class="citation-heading">
          <div><h2 id="citation-title">BibTeX</h2><p>If you find our survey useful, please cite:</p></div>
          <div class="citation-actions">
            <a href="survey.bib" download="agentic-videogen.bib">Download .bib <span aria-hidden="true">↓</span></a>
            <button class="citation-copy" type="button" data-copy-survey>${resourceIcon('copy')}<span data-copy-label>Copy BibTeX</span></button>
          </div>
        </div>
        <pre class="citation-code"><code id="survey-bibtex">${escapeHtml(surveyBibtex)}</code></pre>
        <div class="citation-bottom"><a href="https://arxiv.org/abs/2610.40191" target="_blank" rel="noopener noreferrer">arXiv:2610.40191 <span aria-hidden="true">↗</span></a><p class="citation-status" data-citation-status role="status" aria-live="polite"></p></div>
      </div>
    </section>`;

const hero = `
    <section class="hero preview-hero" aria-labelledby="hero-title">
      <div class="hero-shell wrap">
        <div class="hero-copy">
          <div class="eyebrow"><span class="status-dot"></span> Preprint 2026</div>
          <h1 id="hero-title" aria-label="Video Generation Meets Agent Harness: A Survey"><span class="title-line">Video Generation</span><span class="title-line title-meets">Meets</span><span class="title-line title-accent">Agent Harness<span class="title-period">.</span></span></h1>
          <ul class="hero-keywords" aria-label="Paper keywords">
            <li>Video Generation</li>
            <li>Agent</li>
            <li>Harness Engineering</li>
            <li>World Models</li>
            <li>Recursive Self-Improvement</li>
          </ul>
          <nav class="hero-actions" aria-label="Paper resources">
            <a class="resource-link is-primary" href="https://arxiv.org/pdf/2610.40191" target="_blank" rel="noopener noreferrer">${resourceIcon('paper')}<span>Paper</span></a>
            <a class="resource-link" href="https://github.com/agentic-videogen/awesome-agentic-videogen" target="_blank" rel="noopener noreferrer">${resourceIcon('github')}<span>GitHub</span></a>
            <a class="resource-link" href="#citation">${resourceIcon('cite')}<span>Cite</span></a>
            <span class="resource-link is-pending" role="link" aria-disabled="true" aria-label="HF Paper, coming soon" title="Hugging Face paper link coming soon">${resourceIcon('hf')}<span>HF Paper</span><small>Soon</small></span>
            <a class="resource-link" href="#library">${resourceIcon('reading')}<span>Reading List</span></a>
            <a class="resource-link" href="mailto:lfanar@connect.ust.hk">${resourceIcon('contact')}<span>Contact</span></a>
          </nav>
        </div>
        ${studio}
        <div class="hero-bottom"><div class="stats"><div><strong id="total-count">—</strong><span>PAPERS & RESOURCES</span></div><div><strong>03</strong><span>CORE READING PATHS</span></div><div><strong id="code-count">—</strong><span>CODE LINKS</span></div></div><a class="hero-down" href="#perspective">Discover the landscape <span aria-hidden="true">↓</span></a></div>
      </div>
    </section>`;

const glyphs = [
  `<svg viewBox="0 0 320 122" fill="none"><path d="M16 105h285" stroke="currentColor" opacity=".22"/><g class="story-frame"><rect x="21" y="27" width="77" height="55" rx="6"/><path d="m27 74 21-24 15 14 12-9 17 18"/><circle cx="77" cy="40" r="5"/></g><g class="story-frame middle"><rect x="119" y="17" width="82" height="59" rx="6"/><path d="m125 66 24-30 16 19 13-11 17 23"/><circle cx="181" cy="32" r="5"/></g><g class="story-frame"><rect x="223" y="33" width="77" height="55" rx="6"/><path d="m229 80 23-26 15 16 11-9 16 18"/><circle cx="280" cy="47" r="5"/></g><path d="M100 56h15m-5-5 5 5-5 5m94-5h15m-5-5 5 5-5 5" stroke="currentColor" opacity=".55"/><circle cx="57" cy="105" r="3" fill="currentColor"/><circle cx="161" cy="105" r="3" fill="currentColor"/><circle cx="263" cy="105" r="3" fill="currentColor"/></svg>`,
  `<svg viewBox="0 0 320 122" fill="none"><ellipse cx="160" cy="61" rx="105" ry="30" transform="rotate(-15 160 61)" stroke="currentColor" opacity=".3"/><circle cx="160" cy="61" r="45" stroke="currentColor" stroke-width="1.5"/><ellipse cx="160" cy="61" rx="19" ry="45" stroke="currentColor"/><ellipse cx="160" cy="61" rx="45" ry="18" stroke="currentColor"/><path d="M115 61h90m-45-45v90" stroke="currentColor" opacity=".4"/><circle cx="197" cy="37" r="5" fill="currentColor"/><circle cx="76" cy="80" r="3" fill="currentColor" opacity=".6"/><path d="M245 23v14m-7-7h14M64 38v8m-4-4h8" stroke="currentColor" opacity=".5"/></svg>`,
  `<svg viewBox="0 0 320 122" fill="none"><path d="M75 40q77-54 154 0m-1-8 3 11-12-1M246 67q-77 59-158 4m-2 10-1-12 12 2" stroke="currentColor" stroke-width="1.6"/><g class="loop-step"><rect x="30" y="42" width="68" height="35" rx="7"/><text x="64" y="64" text-anchor="middle">DATA</text></g><g class="loop-step"><rect x="126" y="42" width="68" height="35" rx="7"/><text x="160" y="64" text-anchor="middle">TRAIN</text></g><g class="loop-step"><rect x="222" y="42" width="68" height="35" rx="7"/><text x="256" y="64" text-anchor="middle">EVAL</text></g><path d="M101 60h20m-5-5 5 5-5 5m81-5h20m-5-5 5 5-5 5" stroke="currentColor" opacity=".6"/></svg>`
];

let preview = original
  .replace('<title>Agentic VideoGen — Video Generation Meets Agent Harness</title>', '<title>Design preview · Agentic VideoGen</title>')
  .replace('<meta name="theme-color" content="#f7f6f2">', '<meta name="theme-color" content="#121629">\n  <meta name="robots" content="noindex">')
  .replace('<body>', '<body class="design-preview">')
  .replace(/<section class="hero wrap"[\s\S]*?<\/section>/, hero)
  .replace(comparisonStart, researchTree + '\n' + comparisonStart)
  .replace('<a href="#library">Paper library</a>', '<a href="#library">Paper library</a><a href="#research-tree">Research tree</a>')
  .replace('<a href="#comparison">Table 1</a>', '<a href="#comparison">Survey Comparison</a>')
  .replace(originalOpeningArtwork, openingArtwork)
  .replace(originalOpeningScript, openingScript)
  .replace(contribute, '')
  .replace('  </main>', `${peopleSection}\n${citation}\n${contribute}\n  </main>`)
  .replace('<span>Survey manuscript link forthcoming.</span>', '<a href="https://arxiv.org/pdf/2610.40191" target="_blank" rel="noopener noreferrer">Paper ↗</a>')
  .replace('</head>', '  <link rel="stylesheet" href="preview-design.css">\n  <link rel="stylesheet" href="preview-studio.css">\n  <link rel="stylesheet" href="preview-tree.css">\n  <script src="preview-design.js" type="module"></script>\n  <script src="preview-tree.js" type="module"></script>\n</head>');
let glyphIndex = 0;
preview = preview.replace(/<div class="path-glyph[^\"]*" aria-hidden="true">[\s\S]*?<\/div>/g, () => `<div class="path-glyph path-art" aria-hidden="true">${glyphs[glyphIndex++]}</div>`);
if (glyphIndex !== 3) throw new Error('Expected exactly three reading-path illustrations.');

// Validate the separate preview without changing any manuscript or catalogue content.
for (const author of people.authors) if (!preview.includes(author.name)) throw new Error('Missing author: ' + author.name);
const comparison = source => source.match(/<!-- comparison:start -->([\s\S]*?)<!-- comparison:end -->/)?.[1];
if (comparison(preview) !== comparison(original)) throw new Error('Comparison table changed.');
const ids = [...preview.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
if (new Set(ids).size !== ids.length) throw new Error('Duplicate IDs in preview.');
for (const match of preview.matchAll(/href="#([^"]+)"/g)) if (!ids.includes(match[1])) throw new Error('Broken anchor: ' + match[1]);

fs.writeFileSync(path.join(docs, 'survey.bib'), surveyBibtex + '\n');
fs.writeFileSync(path.join(docs, 'preview.html'), preview.replace(/[\t ]+$/gm, ''));
console.log('Local design preview: docs/preview.html (published index unchanged).');
