// Optional one-time importer. Only bibliographic metadata and category labels leave the manuscript.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const option = (name) => { const i = args.indexOf(name); return i < 0 ? null : args[i + 1]; };
const manuscript = option('--manuscript');
if (!manuscript) throw new Error('Usage: node scripts/import-survey.mjs --manuscript PATH [--verified JSON]');

function plain(s = '') {
  return s.replace(/\\(?:textit|textbf|emph|textrm|mathrm|url)\s*\{([^{}]*)\}/g, '$1')
    .replace(/\\&/g, '&').replace(/\\%/g, '%').replace(/\\_/g, '_')
    .replace(/\\(?:LaTeX|TeX)/g, 'LaTeX').replace(/[{}]/g, '').replace(/~/g, ' ')
    .replace(/\\['`"^]\s*([A-Za-z])/g, '$1').replace(/\\[a-zA-Z]+\s*/g, '')
    .replace(/\s+/g, ' ').trim();
}
function parseBib(text) {
  const entries = [];
  const start = /@(\w+)\s*\{\s*([^,\s]+)\s*,/g;
  let m;
  while ((m = start.exec(text))) {
    if (['comment', 'preamble', 'string'].includes(m[1].toLowerCase())) continue;
    let p = start.lastIndex, depth = 1, quoted = false;
    const begin = p;
    for (; p < text.length && depth; p++) {
      if (text[p - 1] === '\\') continue;
      if (text[p] === '"' && depth === 1) quoted = !quoted;
      if (!quoted) { if (text[p] === '{') depth++; if (text[p] === '}') depth--; }
    }
    const body = text.slice(begin, p - 1), fields = {};
    const re = /([a-zA-Z][\w-]*)\s*=\s*/g;
    let f;
    while ((f = re.exec(body))) {
      let i = re.lastIndex, end = i, value;
      if (body[i] === '{') {
        let d = 1; for (end = i + 1; end < body.length && d; end++) {
          if (body[end - 1] === '\\') continue;
          if (body[end] === '{') d++; if (body[end] === '}') d--;
        }
        value = body.slice(i + 1, end - 1);
      } else if (body[i] === '"') {
        for (end = i + 1; end < body.length; end++) if (body[end] === '"' && body[end - 1] !== '\\') break;
        value = body.slice(i + 1, end++);
      } else {
        end = body.indexOf(',', i); if (end < 0) end = body.length;
        value = body.slice(i, end).trim();
      }
      fields[f[1].toLowerCase()] = value; re.lastIndex = end;
    }
    entries.push({ key: m[2], entryType: m[1], ...fields }); start.lastIndex = p;
  }
  return entries;
}
const entries = new Map(), duplicateKeys = [];
for (const file of ['references.bib', 'references_world_model_additions.bib', 'references_agent_design.bib']) {
  for (const e of parseBib(fs.readFileSync(path.join(manuscript, file), 'utf8'))) {
    if (!entries.has(e.key)) entries.set(e.key, e); else duplicateKeys.push(e.key);
  }
}
const cached = option('--verified') ? JSON.parse(fs.readFileSync(option('--verified'), 'utf8')) : [];
const arxiv = (s = '') => s.match(/(?:arxiv\.org\/(?:abs|html|pdf)\/|arxiv\s*:\s*)(\d{4}\.\d{4,5})(?:v\d+)?/i)?.[1] || s.trim().match(/^(\d{4}\.\d{4,5})(?:v\d+)?(?:\.pdf)?$/)?.[1] || null;
const byArxiv = new Map(cached.filter(p => p.arxiv_id).map(p => [p.arxiv_id, p]));
const byKey = new Map(cached.map(p => [p.citation_key, p]));
const cites = new Map();
const stripComments = text => text.split('\n').map(l => l.replace(/(?<!\\)%.*/, '')).join('\n').replace(/\\begin\{comment\}[\s\S]*?\\end\{comment\}/g, '');

function readTex(relative, track, inherited = 'Overview', stack = []) {
  if (stack.includes(relative)) return;
  const full = path.join(manuscript, relative.endsWith('.tex') ? relative : relative + '.tex');
  if (!fs.existsSync(full)) return;
  const text = stripComments(fs.readFileSync(full, 'utf8'));
  const tokens = /\\(subsection|subsubsection|input|include)\*?\{([^}]+)\}|\\cite\w*\*?(?:\[[^\]]*\]){0,2}\{([^}]+)\}/g;
  let m, group = inherited;
  while ((m = tokens.exec(text))) {
    if (m[1] === 'subsection') group = plain(m[2]);
    else if (m[1] === 'subsubsection') { /* keep a readable two-level taxonomy */ }
    else if (m[1] === 'input' || m[1] === 'include') readTex(m[2], track, group, [...stack, relative]);
    else if (m[3]) for (const key of m[3].split(',').map(k => k.trim()).filter(k => !k.includes('#'))) {
      if (!cites.has(key)) cites.set(key, []);
      if (!cites.get(key).some(x => x.track === track && x.group === group)) cites.get(key).push({ track, group });
    }
  }
}
for (const [file, track] of [
  ['sections/04_production.tex', 'generation'], ['sections/05_world_models.tex', 'world-modeling'],
  ['sections/03_model_development.tex', 'development'], ['sections/06_agent_design.tex', 'agent-design'],
  ['sections/01_introduction.tex', 'foundations'], ['sections/02_background.tex', 'foundations'],
  ['sections/07_future_challenges.tex', 'frontiers'],
]) readTex(file, track);

const papers = [], identities = new Map(), missing = [], noUrl = [];
for (const [key, topics] of cites) {
  const b = entries.get(key); if (!b) { missing.push(key); continue; }
  const id = arxiv(b.url || '') || arxiv(b.eprint || '') || arxiv(b.journal || '');
  const c = byKey.get(key) || byArxiv.get(id);
  const candidates = [b.url, b.howpublished, b.note].filter(Boolean).flatMap(s => s.match(/https?:\/\/[^\s{}<>]+/g) || []);
  const links = [...new Set([...(c?.project_urls || []), ...candidates])].filter(u => !/mdpi\.com|preprints\.org|sites\.google\.com\/corp\//i.test(u));
  const archival = links.find(u => /doi\.org|proceedings\.mlr\.press|openaccess\.thecvf\.com|openreview\.net|aclanthology\.org|dl\.acm\.org|ieeexplore\.ieee\.org/i.test(u));
  const url = id ? `https://arxiv.org/abs/${id}` : archival || (b.doi ? `https://doi.org/${b.doi}` : null) || links.find(u => !/github\.com/.test(u)) || links[0] || null;
  if (!url) { noUrl.push(key); continue; }
  const title = plain(c?.verified_title || b.title);
  if (!title || /^(?:tbd|todo|untitled)$/i.test(title)) { noUrl.push(key); continue; }
  const identity = id ? `arxiv:${id}` : title.toLowerCase().replace(/[^a-z0-9]/g, '');
  const previous = identities.get(identity);
  if (previous) {
    previous.aliases.push(key);
    for (const t of topics) if (!previous.topics.some(x => x.track === t.track && x.group === t.group)) previous.topics.push(t);
    continue;
  }
  const year = Number(plain(b.year)) || (c?.date ? Number(c.date.slice(0, 4)) : null);
  const sourceVenue = plain(b.booktitle || b.journal || b.howpublished || '');
  const venue = /arxiv/i.test(sourceVenue) ? 'arXiv' : sourceVenue.replace(/https?:\/\/\S+/g, '').replace(/,?\s*(?:January|February|March|April|May|June|July|August|September|October|November|December).*$/, '').trim();
  const type = /survey|review|taxonomy/i.test(title) ? 'Survey' : /benchmark|worldscore|vbench|videobench|eval\b/i.test(title) ? 'Benchmark' : /dataset|data set|collection of.*video/i.test(title) ? 'Dataset' : /repository|documentation|specification|standard/i.test(sourceVenue) ? 'Tool / standard' : /blog|technical report|project page/i.test(sourceVenue) ? 'Report' : 'Paper';
  const p = {
    id: key, aliases: [], name: c?.name || null, title, authors: plain(b.author), year,
    date: c?.date || null, venue: venue || (id ? 'arXiv' : 'Online resource'), type,
    url, arxiv: id, code: links.find(u => /^https?:\/\/github\.com\/[^/]+\/[^/#?]+/.test(u)) || null,
    project: links.find(u => u !== url && !/arxiv\.org|doi\.org|github\.com|proceedings\.mlr\.press|openaccess\.thecvf\.com|openreview\.net|aclanthology\.org|dl\.acm\.org|ieeexplore\.ieee\.org/.test(u)) || null,
    topics, metadata: c ? 'Previously source checked' : 'Survey bibliography',
    checkedOn: c?.verified_on || null,
  };
  identities.set(identity, p); papers.push(p);
}
const genie = papers.find(p => p.id === 'hadsell2026genie4');
if (genie) Object.assign(genie, { name: 'Genie 4', date: '2026-10-27', metadata: 'Previously source checked', checkedOn: '2026-10-28' });
papers.sort((a, b) => (b.year || 0) - (a.year || 0) || a.title.localeCompare(b.title));
const catalogue = { updated: '2026-10-28', source: 'Bibliographic records cited in the survey; source-checked timeline records reused where available.', papers };
fs.mkdirSync(path.join(root, 'data'), { recursive: true });
fs.writeFileSync(path.join(root, 'data/catalogue.json'), JSON.stringify(catalogue, null, 2) + '\n', 'utf8');
console.log(JSON.stringify({ papers: papers.length, cachedMetadata: papers.filter(p => p.checkedOn).length, byTrack: Object.fromEntries(['generation','world-modeling','development','agent-design','foundations','frontiers'].map(t => [t,papers.filter(p => p.topics.some(x => x.track === t)).length])), missing, noUrl, ignoredDuplicateKeys: [...new Set(duplicateKeys)] }, null, 2));
