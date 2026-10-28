export function renderSurveyComparison(data,escape){
  const labels={systematic:'Systematic coverage',partial:'Partial coverage',outside:'Outside scope'};
  const mark=state=>`<span class="coverage-mark coverage-${state}" role="img" aria-label="${labels[state]}" title="${labels[state]}"><svg viewBox="-5 -5 10 10" aria-hidden="true"><use href="#coverage-${state==='outside'?'cross':'check'}"></use></svg></span>`;
  const row=(r,isOurs=false)=>`<tr${isOurs?' class="comparison-ours"':` data-citation="${escape(r.citation)}"`}><th scope="row">${isOurs?'Ours':`<a href="${escape(r.url)}" target="_blank" rel="noopener noreferrer">${escape(r.title)}<span aria-hidden="true"> ↗</span></a>`}</th><td class="comparison-year">${r.year}</td>${r.coverage.map(s=>`<td>${mark(s)}</td>`).join('')}</tr>`;
  const count=data.groups.reduce((n,g)=>n+g.rows.length,0);
  return `
    <section class="comparison wrap" id="comparison" aria-labelledby="comparison-title">
      <div class="section-heading"><div><p class="eyebrow">TABLE 1 · POSITIONING THE SURVEY</p><h2 id="comparison-title">Comparison with related literature.</h2></div><p>${count} related studies · 6 comparison dimensions<br>Grouped and ordered as in the paper.</p></div>
      <div class="comparison-toolbar"><div class="comparison-legend" aria-label="Coverage legend">${Object.entries(labels).map(([s,l])=>`<span>${mark(s)}${l}</span>`).join('')}</div><span class="comparison-hint" id="comparison-hint">Scroll to explore the full table ↕ ↔</span></div>
      <svg class="coverage-symbols" width="0" height="0" aria-hidden="true"><defs><path id="coverage-check" d="M-3.3-.3C-2.9-1.2-2.2-2.5-1.7-3C-.1 0 1.9 2.4 3.5 3.8"></path><path id="coverage-cross" d="M-2.1 3.4C-1.2 1.8.4-1.5 2.2-3.3M3.1 4.2C1.2 2-1.6-1.2-3-4"></path></defs></svg>
      <div class="comparison-scroll" role="region" tabindex="0" aria-label="Table 1, comparison with related literature" aria-describedby="comparison-hint comparison-notes">
        <table class="comparison-table">
          <caption class="sr-only">Table 1. ${escape(data.caption)}. ${count} related studies and our survey.</caption>
          <colgroup><col class="comparison-study-col"><col class="comparison-year-col"><col span="6"></colgroup>
          <thead><tr><th scope="col" rowspan="2" class="comparison-study">Survey / Study</th><th scope="col" rowspan="2">Year</th><th scope="colgroup" colspan="2">Scope</th><th scope="colgroup" colspan="3">Thematic Coverage</th><th scope="col" rowspan="2">Agentic<br>Design</th></tr><tr>${data.columns.slice(0,5).map(c=>`<th scope="col">${escape(c.label)}</th>`).join('')}</tr></thead>
${data.groups.map(g=>`          <tbody><tr class="comparison-family"><th scope="rowgroup" colspan="8">${escape(g.name)}</th></tr>\n${g.rows.map(r=>'            '+row(r)).join('\n')}\n          </tbody>`).join('\n')}
          <tfoot>${row(data.ours,true)}</tfoot>
        </table>
      </div>
      <p class="comparison-notes" id="comparison-notes">${escape(data.notes)}</p>
    </section>
    `;
}
