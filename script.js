(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const responses = {
    matrix:['MATRIX STREAM','Visual matrix injected.','Signal pattern locked.'],
    glitch:['GLITCH EVENT','Reality layer unstable...','Visual layer restored.'],
    hack:['SIMULATION ONLY','Access simulation initiated.','Firewall: FRIENDLY MODE'],
    void:['VOID CHANNEL','A visual void has opened.','Signal disappearing...'],
    random:['RANDOM EVENT','Quantum dice rolled.','A random visual event was triggered.'],
    pulse:['PULSE','Energy wave detected.','Pulse synchronized.'],
    warning:['WARNING','Visual warning protocol engaged.','No real systems are affected.'],
    override:['OVERRIDE','Demo permissions granted.','NEXUS visual layer unlocked.'],
    system:['SYSTEM','All visual modules available.','Navigation grid nominal.'],
    secret:['SECRET','You found the hidden command.','Welcome, explorer.'],
    ghost:['GHOST','Entity detected.','Trace will vanish automatically.'],
    portal:['PORTAL','Portal coordinates generated.','Sector 07 → Sector 42'],
    chaos:['CHAOS','Randomizing visual layers...','Order restored.'],
    clear:['CLEAR','Visual layer cleared.','Awaiting command...'],
    nexus:['NEXUS','HARDIK // NEXUS is online.','DREAM // CREATE // EXPLORE'],
    tomoe1:['SHARINGAN // 1-TOMOE','One tomoe awakened.','Visual eye simulation online.'],
    tomoe2:['SHARINGAN // 2-TOMOE','Second tomoe awakened.','Tracking mode engaged.'],
    tomoe3:['SHARINGAN // 3-TOMOE','Three tomoe awakened.','Maximum base Sharingan visual.'],
    mangekyo:['MANGEKYO SHARINGAN','Advanced eye pattern activated.','Naruto-inspired visual simulation only.'],
    ems:['ETERNAL MANGEKYO','Eternal pattern stabilized.','High-energy eye visual online.']
  };

  document.addEventListener('DOMContentLoaded', () => {
    const menu = $('#menu');
    const links = $('#links');
    if (menu && links) {
      menu.addEventListener('click', () => {
        const open = links.classList.toggle('open');
        menu.setAttribute('aria-expanded', String(open));
      });
      $$('#links a').forEach(a => a.addEventListener('click', () => {
        links.classList.remove('open');
        menu.setAttribute('aria-expanded','false');
      }));
    }

    const year = $('#year');
    if (year) year.textContent = String(new Date().getFullYear());

    const out = $('#terminalOutput');
    const input = $('#cmdInput');
    const stage = $('#fxStage');
    const execute = $('#execute');
    const toggle = $('#commandToggle');
    const panel = $('#commandPanel');

    const clearStage = () => {
      if (!stage) return;
      $$('.fx-item', stage).forEach(el => el.remove());
      stage.className = 'fx-stage';
    };

    const add = (cls, html = '', duration = 3000) => {
      if (!stage) return null;
      const el = document.createElement('div');
      el.className = `fx-item ${cls}`;
      if (html) el.innerHTML = html;
      stage.appendChild(el);
      if (duration > 0) window.setTimeout(() => el.remove(), duration);
      return el;
    };

    const sharingan = (count = 3, type = 'tomoe') => {
      const wrap = add('sharingan-wrap', '', 5000);
      if (!wrap) return;
      const eye = document.createElement('div'); eye.className = `sharingan-eye ${type}`;
      const iris = document.createElement('div'); iris.className = 'sharingan-iris';
      const pupil = document.createElement('div'); pupil.className = 'sharingan-pupil'; iris.appendChild(pupil); eye.appendChild(iris);
      if (type === 'tomoe') {
        for (let i=0;i<count;i++) {
          const t = document.createElement('span'); t.className='tomoe'; t.style.setProperty('--a',`${(i*360/count)}deg`); iris.appendChild(t);
        }
      }
      if (type === 'mangekyo') {
        for (let i=0;i<6;i++) {
          const p=document.createElement('i'); p.className='mangekyo-petal'; p.style.setProperty('--a',`${i*60}deg`); iris.appendChild(p);
        }
      }
      if (type === 'ems') {
        for (let i=0;i<3;i++) {
          const r=document.createElement('i'); r.className='ems-ring'; r.style.setProperty('--a',`${i*60}deg`); iris.appendChild(r);
        }
      }
      wrap.appendChild(eye);
      const label=document.createElement('div'); label.className='sharingan-label';
      label.textContent = type==='tomoe' ? `${count}-TOMOE SHARINGAN` : type==='mangekyo' ? 'MANGEKYO SHARINGAN' : 'ETERNAL MANGEKYO';
      wrap.appendChild(label);
    };

    const visual = (cmd) => {
      if (!stage) return;
      clearStage();
      stage.classList.add(`event-${cmd}`);
      switch(cmd) {
        case 'ghost': add('ghost-figure'); break;
        case 'portal': add('portal-ring', '', 3000); add('portal-core', '', 3000); add('portal-label','PORTAL OPEN // AUTO-CLOSING',3000); break;
        case 'matrix': { const r=add('matrix-rain','',0); for(let i=0;i<14;i++){const s=document.createElement('span');s.textContent=Array.from({length:10},()=>Math.random()>.5?'1':'0').join('');s.style.animationDelay=`${Math.random()*-.9}s`;r.appendChild(s);} break; }
        case 'glitch': add('glitch-text','NEXUS//GLITCH',2500); break;
        case 'warning': add('warning-flash','⚠ WARNING',2200); break;
        case 'pulse': add('pulse-core','',2500); break;
        case 'void': add('void-event','',2200); break;
        case 'hack': { const g=add('hack-grid','',0); for(let i=0;i<32;i++){const x=document.createElement('i');x.style.animationDelay=`${Math.random()*.5}s`;g.appendChild(x);} break; }
        case 'system': add('system-core','SYSTEM',4000); break;
        case 'chaos': for(let i=0;i<22;i++){const e=add('chaos-shard','',1200);e.style.left=`${45+Math.random()*10}%`;e.style.top=`${45+Math.random()*10}%`;e.style.setProperty('--dx',`${Math.random()*500-250}px`);e.style.setProperty('--dy',`${Math.random()*300-150}px`);e.style.transform=`rotate(${Math.random()*180}deg)`;} break;
        case 'override': add('neon-word','OVERRIDE',2600); break;
        case 'secret': add('neon-word','SECRET MODE',2600); break;
        case 'random': { const choices=['ghost','portal','matrix','glitch','pulse','void','tomoe1','tomoe2','tomoe3']; const picked=choices[Math.floor(Math.random()*choices.length)]; visual(picked); break; }
        case 'nexus': add('neon-word','HK-NEXUS',2600); break;
        case 'tomoe1': sharingan(1,'tomoe'); break;
        case 'tomoe2': sharingan(2,'tomoe'); break;
        case 'tomoe3': sharingan(3,'tomoe'); break;
        case 'mangekyo': sharingan(0,'mangekyo'); break;
        case 'ems': sharingan(0,'ems'); break;
        case 'clear': clearStage(); break;
        default: add('event-label', `${cmd.toUpperCase()} // VISUAL EVENT`, 2500);
      }
    };

    const closePanel = () => {
      if (!panel || !toggle) return;
      panel.hidden = true;
      toggle.setAttribute('aria-expanded','false');
      const arrow = $('span', toggle); if (arrow) arrow.textContent='▾';
    };

    const run = (value) => {
      const cmd = String(value || '').trim().toLowerCase();
      if (!cmd) return;
      if (cmd === 'clear') {
        if (out) out.textContent = 'nexus@ai:~$ clear\nVisual layer cleared.\nAwaiting command...';
        clearStage();
        if (input) input.value='';
        return;
      }
      const r = responses[cmd] || ['UNKNOWN COMMAND','Try one of the listed commands.','Choose a command to trigger a visual event.'];
      if (out) { out.textContent += `${out.textContent ? '\n\n' : ''}nexus@ai:~$ ${cmd}\n${r.join('\n')}`; out.scrollTop=out.scrollHeight; }
      if (responses[cmd]) visual(cmd);
      if (input) input.value='';
    };

    if (toggle && panel) {
      toggle.addEventListener('click', () => {
        const open = !panel.hidden;
        panel.hidden = open;
        toggle.setAttribute('aria-expanded', String(!open));
        const arrow=$('span',toggle); if (arrow) arrow.textContent=open?'▾':'▴';
      });
    }
    $$('.cmd').forEach(btn => btn.addEventListener('click', () => { run(btn.dataset.cmd); closePanel(); }));
    if (input) input.addEventListener('keydown', e => { if (e.key === 'Enter') run(input.value); });
    if (execute && input) execute.addEventListener('click', () => run(input.value));

    const signal = $('#signalValue');
    const signalBtn = $('#signalBtn');
    if (signal && signalBtn) signalBtn.addEventListener('click', () => {
      signal.textContent = String(Math.floor(1000 + Math.random()*9000));
      if (signal.animate) signal.animate([{transform:'scale(.8)',opacity:.2},{transform:'scale(1)',opacity:1}],{duration:350});
    });

    const secretBtn=$('#secretBtn'), secret=$('#secret');
    if (secretBtn && secret) {
      let taps=0;
      secretBtn.addEventListener('click',()=>{ taps++; if(taps>=3){secret.classList.add('reveal');secretBtn.textContent='SECRET MODE UNLOCKED';} });
    }
  });
})();
