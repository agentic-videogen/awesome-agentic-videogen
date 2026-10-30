import fs from 'node:fs';
import path from 'node:path';

const escape = value => String(value).replace(/[&<>"']/g, char => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[char]));
const icon = body => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;

export function buildResearchTree(docs) {
  const tree = JSON.parse(fs.readFileSync(path.join(docs, 'preview-tree-data.json'), 'utf8'));
  if (tree.nodes.length !== 96 || tree.width !== 1200 || tree.height !== 790) throw new Error('Expected the published landscape Figure 2 and all 96 works.');
  const links = tree.nodes.map(node => {
    const style = `left:${node.x / tree.width * 100}%;top:${node.y / tree.height * 100}%;width:${node.width / tree.width * 100}%;height:${node.height / tree.height * 100}%`;
    return `<a class="tree-node" id="${escape(node.id)}" href="${escape(node.url)}" target="_blank" rel="noopener noreferrer" style="${style}" data-tree-name="${escape(node.name)}" data-tree-title="${escape(node.title)}" title="${escape(node.name + ' — ' + node.title)}"><span class="sr-only">${escape(node.name)}</span></a>`;
  }).join('\n');

  return `
    <section class="research-tree" id="research-tree" aria-labelledby="research-tree-title">
      <div class="wrap">
        <div class="tree-heading">
          <div><p class="eyebrow">FIGURE 2 · FROM THE PAPER</p><h2 id="research-tree-title">Explore the research tree.</h2><p>Select any work to open its paper or project.</p></div>
          <a class="tree-open" href="preview-figure2.svg" target="_blank" rel="noopener noreferrer">Open full figure <span aria-hidden="true">↗</span></a>
        </div>
        <figure class="research-tree-figure" aria-labelledby="research-tree-title">
          <div class="tree-toolbar" data-tree-controls hidden>
            <div class="tree-find">
              <label class="tree-search">${icon('<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>')}<input type="search" aria-label="Find a work in the research tree" placeholder="Find a work, e.g. ViMax" autocomplete="off" data-tree-search></label>
              <button class="tree-locate" type="button" data-tree-locate disabled>Locate ${icon('<path d="M4 12h16m-6-6 6 6-6 6"/>')}</button>
            </div>
            <div class="tree-zoom" role="group" aria-label="Research tree zoom">
              <button type="button" data-tree-out aria-label="Zoom out research tree" disabled>${icon('<path d="M5 12h14"/>')}</button>
              <output data-tree-zoom aria-label="Research tree scale">100%</output>
              <button type="button" data-tree-in aria-label="Zoom in research tree">${icon('<path d="M5 12h14m-7-7v14"/>')}</button>
              <button class="tree-fit" type="button" data-tree-fit>Fit</button>
            </div>
          </div>
          <div class="tree-viewport" data-tree-viewport>
            <div class="tree-canvas" data-tree-canvas>
              <img src="preview-figure2.svg" width="1200" height="790" loading="lazy" decoding="async" draggable="false" alt="Figure 2 from the paper: a shared Video Generation trunk branches into Agentic World Modeling, Agentic Video Generation, and RSI in Video Generation. Four regions indicate increasing agent involvement.">
              ${links}
            </div>
          </div>
          <figcaption class="tree-footnote"><p>Branches show thematic connections; vertical position reflects agent involvement.</p><span data-tree-status role="status" aria-live="polite">96 linked works</span></figcaption>
        </figure>
      </div>
    </section>`;
}
