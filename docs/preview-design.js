// The catalogue continues to use the existing app.js and its unchanged data.
const studio = document.querySelector('[data-robot-studio]');
if (studio) {
  const toggle = studio.querySelector('.workstudio-motion');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let pausedByUser = false;
  const updateMotion = () => {
    const paused = pausedByUser || reducedMotion.matches;
    studio.dataset.motion = paused ? 'paused' : 'playing';
    toggle.hidden = reducedMotion.matches;
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.setAttribute('aria-label', paused ? 'Play studio animation' : 'Pause studio animation');
    toggle.querySelector('span').textContent = paused ? 'Play' : 'Pause';
  };
  toggle.addEventListener('click', () => {
    pausedByUser = !pausedByUser;
    updateMotion();
  });
  reducedMotion.addEventListener('change', updateMotion);
  updateMotion();
}
const header = document.querySelector('.site-header');
if (header) {
  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  updateHeader();
  window.addEventListener('scroll', updateHeader, {passive: true});
}

const copySurvey = document.querySelector('[data-copy-survey]');
const surveyBibtex = document.querySelector('#survey-bibtex');
if (copySurvey && surveyBibtex) {
  const label = copySurvey.querySelector('[data-copy-label]');
  const status = document.querySelector('[data-citation-status]');
  let resetLabel;
  copySurvey.addEventListener('click', async () => {
    clearTimeout(resetLabel);
    try {
      await navigator.clipboard.writeText(surveyBibtex.textContent.trim());
      label.textContent = 'Copied!';
      status.textContent = 'Citation copied to clipboard.';
      resetLabel = setTimeout(() => {
        label.textContent = 'Copy BibTeX';
        status.textContent = '';
      }, 3000);
    } catch {
      label.textContent = 'Copy BibTeX';
      status.textContent = 'Select the citation below or use Download .bib.';
    }
  });
}
