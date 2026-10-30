const tree = document.querySelector('#research-tree');
if (tree) {
  const viewport = tree.querySelector('[data-tree-viewport]');
  const canvas = tree.querySelector('[data-tree-canvas]');
  const input = tree.querySelector('[data-tree-search]');
  const locate = tree.querySelector('[data-tree-locate]');
  const zoomIn = tree.querySelector('[data-tree-in]');
  const zoomOut = tree.querySelector('[data-tree-out]');
  const zoomLabel = tree.querySelector('[data-tree-zoom]');
  const status = tree.querySelector('[data-tree-status]');
  const nodes = [...tree.querySelectorAll('.tree-node')];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const levels = [1, 1.25, 1.5, 2, 2.5, 3, 4, 5, 6, 8];
  const normalize = value => value.toLowerCase().replace(/[^a-z0-9]/g, '');
  let zoom = 1;
  let matches = [];
  let matchIndex = 0;

  const centerOn = node => {
    const bounds = node.getBoundingClientRect();
    const frame = viewport.getBoundingClientRect();
    viewport.scrollTo({
      left: viewport.scrollLeft + bounds.left - frame.left - (viewport.clientWidth - bounds.width) / 2,
      top: viewport.scrollTop + bounds.top - frame.top - (viewport.clientHeight - bounds.height) / 2,
      behavior: reducedMotion.matches ? 'instant' : 'smooth',
    });
  };

  const setZoom = (value, node = null) => {
    const centerX = (viewport.scrollLeft + viewport.clientWidth / 2) / canvas.offsetWidth;
    const centerY = (viewport.scrollTop + viewport.clientHeight / 2) / canvas.offsetHeight;
    zoom = Math.max(1, Math.min(8, value));
    canvas.style.width = `${zoom * 100}%`;
    zoomLabel.textContent = `${Math.round(zoom * 100)}%`;
    zoomIn.disabled = zoom >= 8;
    zoomOut.disabled = zoom <= 1;
    requestAnimationFrame(() => {
      if (node) centerOn(node);
      else if (zoom === 1) viewport.scrollTo({left: 0, top: 0});
      else viewport.scrollTo({left: centerX * canvas.offsetWidth - viewport.clientWidth / 2, top: centerY * canvas.offsetHeight - viewport.clientHeight / 2});
    });
  };

  const search = () => {
    const query = normalize(input.value.trim());
    matchIndex = 0;
    matches = query ? nodes.filter(node => normalize(node.dataset.treeName + ' ' + node.dataset.treeTitle).includes(query)) : [];
    for (const node of nodes) {
      node.classList.toggle('is-match', matches.includes(node));
      node.classList.remove('is-selected');
    }
    locate.disabled = !matches.length;
    status.textContent = query ? `${matches.length} ${matches.length === 1 ? 'match' : 'matches'}` : `${nodes.length} linked works`;
  };

  const locateMatch = () => {
    if (!matches.length) return;
    const node = matches[matchIndex];
    for (const other of nodes) other.classList.toggle('is-selected', other === node);
    const readableZoom = levels.find(value => value * viewport.clientWidth >= 1440) || 8;
    setZoom(Math.max(zoom, readableZoom), node);
    status.textContent = `${node.dataset.treeName} · ${matchIndex + 1} of ${matches.length}`;
    node.focus({preventScroll: true});
    matchIndex = (matchIndex + 1) % matches.length;
  };

  zoomIn.addEventListener('click', () => setZoom(levels.find(value => value > zoom) || 8));
  zoomOut.addEventListener('click', () => setZoom([...levels].reverse().find(value => value < zoom) || 1));
  tree.querySelector('[data-tree-fit]').addEventListener('click', () => setZoom(1));
  input.addEventListener('input', search);
  input.addEventListener('keydown', event => {
    if (event.key === 'Enter') { event.preventDefault(); locateMatch(); }
    if (event.key === 'Escape') { input.value = ''; search(); }
  });
  locate.addEventListener('click', locateMatch);
  tree.querySelector('[data-tree-controls]').hidden = false;
}
