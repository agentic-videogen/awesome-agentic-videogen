const $ = s => document.querySelector(s);
const escape = s => String(s ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const params = new URLSearchParams(location.search);
const state = {track:params.get('track') || 'all',query:params.get('q') || '',year:params.get('year') || 'all',type:params.get('type') || 'all',group:params.get('group') || 'all',code:params.get('code')==='1',sort:params.get('sort') || 'newest',page:1};
let catalogue, tracks, papers;
const pageSize = 20;
const safeUrl = value => { try { const u = new URL(value); return ['https:','http:'].includes(u.protocol) ? u.href : '#'; } catch { return '#'; } };
const link = (url,label) => `<a href="${escape(safeUrl(url))}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`;
const month = p => p.date?.slice(0,7) || (p.arxiv ? `20${p.arxiv.slice(0,2)}-${p.arxiv.slice(2,4)}` : `${p.year || 0}-00`);
const tex = s => String(s).replace(/[{}]/g,'').replace(/[%&#_$]/g,c=>'\\'+c);
const bibtex = p => `@misc{${p.id},\n  title = {{${tex(p.title)}}},\n  author = {${tex(p.authors)}},\n${p.year?`  year = {${p.year}},\n`:''}  url = {${p.url}}\n}`;

function toast(text) { const t=$('#toast');t.textContent=text;t.hidden=false;clearTimeout(toast.timer);toast.timer=setTimeout(()=>{t.hidden=true;},2000); }
function options(select,values,label) { select.replaceChildren(new Option(label,'all'),...values.map(v=>new Option(v,v))); }
function topics() {
  const list = state.track==='all' ? [] : [...new Set(papers.flatMap(p=>p.topics.filter(t=>t.track===state.track).map(t=>t.group)))].sort();
  options($('#group-filter'),list,state.track==='all'?'Choose a reading path first':'All topics');
  if (!list.includes(state.group)) state.group='all';
  $('#group-filter').value=state.group;
  $('#group-filter').disabled=state.track==='all';
}
function updateUrl() {
  const p=new URLSearchParams();
  if(state.query)p.set('q',state.query);
  if(state.track!=='all')p.set('track',state.track);
  if(state.year!=='all')p.set('year',state.year);
  if(state.type!=='all')p.set('type',state.type);
  if(state.group!=='all')p.set('group',state.group);
  if(state.code)p.set('code','1');
  if(state.sort!=='newest')p.set('sort',state.sort);
  history.replaceState(null,'',`${location.pathname}${p.size?'?'+p:''}${location.hash}`);
}
function selectTrack(id) {
  state.track=tracks.some(t=>t.id===id)?id:'all';state.group='all';state.page=1;topics();render();
}
function render() {
  const words=state.query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  let results=papers.filter(p=>
    (state.track==='all'||p.topics.some(t=>t.track===state.track))&&
    (state.group==='all'||p.topics.some(t=>t.track===state.track&&t.group===state.group))&&
    (state.year==='all'||String(p.year)===state.year)&&
    (state.type==='all'||p.type===state.type)&&(!state.code||p.code)&&
    words.every(w=>`${p.title} ${p.authors} ${p.name||''} ${p.id} ${p.venue} ${p.arxiv||''} ${p.topics.map(t=>t.group).join(' ')}`.toLowerCase().includes(w))
  );
  const chronological=(a,b)=>(a.year||0)-(b.year||0)||month(a).localeCompare(month(b))||a.title.localeCompare(b.title);
  results.sort(state.sort==='title'?(a,b)=>a.title.localeCompare(b.title):state.sort==='oldest'?chronological:(a,b)=>chronological(b,a));
  const pages=Math.max(1,Math.ceil(results.length/pageSize));state.page=Math.min(state.page,pages);
  const start=(state.page-1)*pageSize, shown=results.slice(start,start+pageSize);
  $('#result-count').textContent=results.length?`${start+1}–${Math.min(start+pageSize,results.length)} of ${results.length} resources`:'0 matching resources';
  $('#page-status').textContent=`Page ${state.page} of ${pages}`;
  $('#previous').disabled=state.page<=1;$('#next').disabled=state.page>=pages;
  const track=tracks.find(t=>t.id===state.track), description=$('#track-description');
  description.hidden=!track;if(track)description.textContent=track.description;
  document.querySelectorAll('[data-filter-track]').forEach(b=>{const active=b.dataset.filterTrack===state.track;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  $('#papers').setAttribute('aria-busy','false');
  $('#papers').innerHTML=shown.length?shown.map(p=>{
    const authorList=p.authors.split(/\s+and\s+/), authorText=authorList.length>3?authorList.slice(0,3).join('; ')+'; et al.':authorList.join('; ');
    const ts=[...new Set(p.topics.map(t=>t.track))].map(id=>tracks.find(t=>t.id===id)).filter(Boolean);
    return `<article class="paper"><div class="paper-meta"><span class="year-tag">${p.year||'n.d.'}</span><span>·</span><span>${escape(p.venue)}</span><span class="type-tag">${escape(p.type)}</span></div><h3>${link(p.url,escape(p.title))}</h3><p class="paper-authors" title="${escape(p.authors)}">${escape(authorText)}</p><div class="paper-footer"><div class="tags">${ts.map(t=>`<button class="tag" data-track="${t.id}" data-card-track="${t.id}" style="border:0;cursor:pointer">${escape(t.short)}</button>`).join('')}</div><div class="paper-links">${link(p.url,p.type==='Paper'||p.type==='Survey'||p.type==='Benchmark'?'Paper':'Source')}${p.code?link(p.code,'Code'):''}${p.project?link(p.project,'Project'):''}<button class="copy-bib" data-bib="${escape(p.id)}" aria-label="Copy BibTeX for ${escape(p.title)}">BibTeX</button></div></div></article>`;
  }).join(''):'<div class="empty"><b>No matching resources.</b><p>Try another keyword, year, or reading path.</p><button class="reset" data-reset>Clear all filters ↺</button></div>';
  updateUrl();
}
function reset() {
  Object.assign(state,{track:'all',query:'',year:'all',type:'all',group:'all',code:false,sort:'newest',page:1});
  $('#search').value='';$('#year-filter').value='all';$('#type-filter').value='all';$('#code-filter').checked=false;$('#sort').value='newest';topics();render();
}
async function init() {
  const response=await fetch('./catalogue.json');if(!response.ok)throw Error('Catalogue unavailable');
  catalogue=await response.json();papers=catalogue.papers;tracks=catalogue.tracks;
  $('#total-count').textContent=papers.length;
  $('#code-count').textContent=papers.filter(p=>p.code).length;
  $('#updated').textContent=`UPDATED ${new Date(catalogue.updated+'T00:00:00Z').toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric',timeZone:'UTC'}).toUpperCase()}`;
  for(const el of document.querySelectorAll('[data-track-count]'))el.textContent=`${papers.filter(p=>p.topics.some(t=>t.track===el.dataset.trackCount)).length} resources`;
  $('#track-filters').innerHTML=`<button class="track-filter" data-filter-track="all">All resources <span>${papers.length}</span></button>`+tracks.map(t=>`<button class="track-filter" data-filter-track="${t.id}">${escape(t.short)}<span>${papers.filter(p=>p.topics.some(x=>x.track===t.id)).length}</span></button>`).join('');
  options($('#year-filter'),[...new Set(papers.map(p=>p.year).filter(Boolean))].sort((a,b)=>b-a).map(String),'All years');
  options($('#type-filter'),[...new Set(papers.map(p=>p.type))].sort(),'All types');
  if(!tracks.some(t=>t.id===state.track))state.track='all';
  $('#search').value=state.query;$('#year-filter').value=state.year;$('#type-filter').value=state.type;$('#code-filter').checked=state.code;$('#sort').value=state.sort;topics();
  document.querySelectorAll('[data-track]').forEach(a=>a.addEventListener('click',()=>selectTrack(a.dataset.track)));
  $('#track-filters').addEventListener('click',e=>{const b=e.target.closest('[data-filter-track]');if(b)selectTrack(b.dataset.filterTrack);});
  $('#search').addEventListener('input',e=>{state.query=e.target.value;state.page=1;render();});
  for(const [id,field] of [['year-filter','year'],['type-filter','type'],['group-filter','group'],['sort','sort']])$('#'+id).addEventListener('change',e=>{state[field]=e.target.value;state.page=1;render();});
  $('#code-filter').addEventListener('change',e=>{state.code=e.target.checked;state.page=1;render();});
  $('#reset').addEventListener('click',reset);
  for(const [id,delta] of [['previous',-1],['next',1]])$('#'+id).addEventListener('click',()=>{state.page+=delta;render();$('#library-title').scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});});
  $('#papers').addEventListener('click',async e=>{
    const tag=e.target.closest('[data-card-track]');if(tag){selectTrack(tag.dataset.cardTrack);return;}
    if(e.target.closest('[data-reset]')){reset();return;}
    const b=e.target.closest('[data-bib]');if(!b)return;
    const p=papers.find(p=>p.id===b.dataset.bib);if(!p)return;
    try{await navigator.clipboard.writeText(bibtex(p));toast('BibTeX copied');}catch{const blob=new Blob([bibtex(p)],{type:'application/x-bibtex'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=p.id+'.bib';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),200);toast('BibTeX downloaded');}
  });
  render();
}
init().catch(()=>{ $('#papers').setAttribute('aria-busy','false');$('#papers').innerHTML='<div class="empty">The catalogue could not be loaded. <a href="https://github.com/agentic-videogen/awesome-agentic-videogen">Browse the complete GitHub collection instead ↗</a></div>';$('#result-count').textContent='Catalogue unavailable'; });
