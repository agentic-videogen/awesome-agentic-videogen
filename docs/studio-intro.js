// Independent of the catalogue: a failed or disabled intro must never gate it.
(() => {
  'use strict';
  const dialog=document.getElementById('studio-intro');
  const replay=document.getElementById('studio-replay');
  const skip=document.getElementById('studio-skip');
  const status=document.getElementById('studio-status');
  if(!dialog||!replay||!skip||!status||typeof dialog.showModal!=='function')return;
  const seenKey='agentic-videogen:studio-intro:v1';
  const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
  const timers=new Set();
  let previousFocus=null;
  let leaving=false;
  const later=(callback,delay)=>{const id=setTimeout(()=>{timers.delete(id);callback();},delay);timers.add(id);return id;};
  const clearTimers=()=>{for(const id of timers)clearTimeout(id);timers.clear();};
  const phase=(name,text)=>{dialog.dataset.phase=name;status.textContent=text;};
  const cleanup=()=>{
    clearTimers();
    document.documentElement.classList.remove('studio-opening');
    dialog.classList.remove('is-leaving');
    leaving=false;
    if(previousFocus&&previousFocus.isConnected&&typeof previousFocus.focus==='function')previousFocus.focus({preventScroll:true});
    previousFocus=null;
  };
  const finish=()=>{try{if(dialog.open)dialog.close();}finally{cleanup();}};
  const dismiss=(immediate=false)=>{
    if(!dialog.open||leaving)return;
    if(immediate||reducedMotion.matches){finish();return;}
    leaving=true;
    dialog.classList.add('is-leaving');
    later(finish,340);
  };
  const play=()=>{
    if(dialog.open)return;
    clearTimers();
    previousFocus=document.activeElement===document.body?null:document.activeElement;
    dialog.classList.remove('is-leaving');
    phase('plan','Planning the next shot…');
    try{dialog.showModal();}catch{cleanup();return;}
    document.documentElement.classList.add('studio-opening');
    try{localStorage.setItem(seenKey,'seen');}catch{/* Storage restrictions must not prevent access. */}
    skip.focus({preventScroll:true});
    later(()=>phase('generate','Generating a little world…'),1450);
    later(()=>phase('edit','Putting the story together…'),2800);
    later(()=>phase('ready','Ready. Let’s explore.'),4100);
    later(()=>dismiss(),4900);
    // Fail-safe: never leave an overlay stuck after an interrupted transition.
    later(finish,6500);
  };
  skip.addEventListener('click',()=>dismiss(true));
  dialog.addEventListener('cancel',event=>{event.preventDefault();dismiss(true);});
  dialog.addEventListener('close',cleanup);
  replay.addEventListener('click',play);
  replay.hidden=false;
  const params=new URLSearchParams(location.search);
  const force=params.get('intro')==='1';
  const deepLink=(location.hash&&location.hash!=='#top')||['track','q','year','type','group','code','sort'].some(key=>params.has(key));
  let seen=false;
  try{seen=localStorage.getItem(seenKey)==='seen';}catch{/* Play once for this page if storage is unavailable. */}
  if(!reducedMotion.matches&&(force||(!seen&&!deepLink)))play();
})();
