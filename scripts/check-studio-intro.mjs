import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const script=fs.readFileSync(path.join(root,'docs/studio-intro.js'),'utf8');
function harness({seen=false,reduced=false,search='',hash='',storageFailure=false,unsupported=false,modalFailure=false}={}){
  let now=0,nextId=0,focusCount=0;
  const pending=new Map(),store=new Map(seen?[['agentic-videogen:studio-intro:v1','seen']]:[]);
  const classes=()=>{const set=new Set();return {add:x=>set.add(x),remove:x=>set.delete(x),contains:x=>set.has(x)};};
  const element=()=>({hidden:true,isConnected:true,dataset:{},classList:classes(),listeners:{},addEventListener(name,callback){this.listeners[name]=callback;},focus(){focusCount++;}});
  const dialog=element(),replay=element(),skip=element(),status=element(),documentElement={classList:classes()},body={};
  dialog.open=false;
  if(!unsupported)dialog.showModal=()=>{if(modalFailure)throw Error('Unavailable');dialog.open=true;};
  dialog.close=()=>{dialog.open=false;dialog.listeners.close?.({});};
  const elements={'studio-intro':dialog,'studio-replay':replay,'studio-skip':skip,'studio-status':status};
  const context={
    document:{getElementById:id=>elements[id],documentElement,body,activeElement:body},
    location:{search,hash},URLSearchParams,matchMedia:()=>({matches:reduced}),
    localStorage:{getItem:key=>{if(storageFailure)throw Error('Storage disabled');return store.get(key)||null;},setItem:(key,value)=>{if(storageFailure)throw Error('Storage disabled');store.set(key,value);}},
    setTimeout:(callback,delay)=>{const id=++nextId;pending.set(id,{at:now+delay,callback});return id;},clearTimeout:id=>pending.delete(id)
  };
  vm.runInNewContext(script,context,{timeout:1000});
  const advance=ms=>{
    const target=now+ms;
    for(let count=0;count<100;count++){
      const next=[...pending.entries()].filter(([,job])=>job.at<=target).sort((a,b)=>a[1].at-b[1].at)[0];
      if(!next)break;
      const [id,job]=next;pending.delete(id);now=job.at;job.callback();
    }
    now=target;
  };
  return {dialog,replay,skip,status,documentElement,store,pending,context,advance,focusCount:()=>focusCount};
}

export function checkStudioIntro(){
  let h=harness();
  assert(h.dialog.open,'First visit must play');
  assert.equal(h.dialog.dataset.phase,'plan');
  assert(h.documentElement.classList.contains('studio-opening'));
  h.advance(1450);assert.equal(h.dialog.dataset.phase,'generate');
  h.advance(1350);assert.equal(h.dialog.dataset.phase,'edit');
  h.advance(1300);assert.equal(h.dialog.dataset.phase,'ready');
  h.advance(800);assert(h.dialog.classList.contains('is-leaving'));
  h.advance(340);assert(!h.dialog.open,'Intro must finish automatically');
  assert(!h.documentElement.classList.contains('studio-opening'),'Scroll must be unlocked');
  assert.equal(h.pending.size,0,'Timers must be cleaned up');
  assert.equal(h.store.get('agentic-videogen:studio-intro:v1'),'seen');
  h=harness({seen:true});assert(!h.dialog.open,'Return visits must not be interrupted');
  h.context.document.activeElement=h.replay;h.replay.listeners.click();assert(h.dialog.open,'Manual replay must work');
  h.skip.listeners.click();assert(!h.dialog.open,'Skip must close immediately');
  assert.equal(h.pending.size,0);assert(h.focusCount()>=2,'Manual replay must restore focus');
  for(const options of [{hash:'#library'},{hash:'#comparison'},{search:'?track=development'},{search:'?q=robot'},{search:'?year=2025'}])assert(!harness(options).dialog.open,'Deep links must bypass the opening');
  assert(harness({seen:true,search:'?intro=1'}).dialog.open,'Preview link must allow replay');
  h=harness({reduced:true});assert(!h.dialog.open,'Reduced motion must bypass autoplay');
  h.replay.listeners.click();assert(h.dialog.open,'Reduced-motion users can explicitly view the scene');
  h.skip.listeners.click();assert(!h.dialog.open);
  h=harness();let prevented=false;h.dialog.listeners.cancel({preventDefault(){prevented=true;}});assert(prevented&&!h.dialog.open,'Escape must close and clean up');assert.equal(h.pending.size,0);
  h=harness({storageFailure:true});assert(h.dialog.open);h.advance(7000);assert(!h.dialog.open,'Storage restrictions must not trap users');
  h=harness({unsupported:true});assert(!h.dialog.open&&h.replay.hidden,'Unsupported dialogs must leave the page usable');
  h=harness({modalFailure:true});assert(!h.dialog.open&&!h.documentElement.classList.contains('studio-opening'),'Modal failures must leave scroll unlocked');
  const html=fs.readFileSync(path.join(root,'docs/index.html'),'utf8');
  for(const file of ['studio-intro.css','studio-intro.html','studio-intro.js'])assert(html.includes(fs.readFileSync(path.join(root,'docs',file),'utf8').trim()),'Stale embedded studio asset: '+file);
  assert(!/<dialog[^>]+\bopen(?:\s|>|=)/.test(html),'Opening must stay closed without JavaScript');
  assert.equal((html.match(/id="studio-intro"/g)||[]).length,1);
  assert.equal((html.match(/id="studio-replay"/g)||[]).length,1);
  console.log('PASS: studio timeline, skip, Escape, first/return visits, deep links, reduced motion, replay, focus, storage failure and embedded assets.');
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))checkStudioIntro();
