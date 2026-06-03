#!/usr/bin/env python3
"""Generate an interactive, offline mod-level connectivity map for Derpack X.

Projects the item-level recipe graph down to a MOD graph (nodes = mods, edge weight = how many recipe
links tie two mods together, incl. shared `c:` tags) and emits a single self-contained HTML file with a
canvas force-directed layout. No dependencies / no network: open tools/recipe-web.html in a browser.

Interactive: toggle any mod off (checkboxes / presets like "remove vanilla" or "remove Create spine") and
the connected components + giant-web % recompute live — the same surgery the CLI does, but watchable.

Usage:  python3 tools/recipe-graph-viz.py        # writes tools/recipe-web.html
"""
import os, sys, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import recipe_graph_lib as L

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'recipe-web.html')

def main():
    g = L.build(remove=frozenset(), overlay=True)   # keep EVERYTHING (incl. vanilla) — viz removes live
    proj = g.mod_projection(min_weight=3)            # threshold keeps the edge set renderable
    mods = {}
    for n in g.nodes:
        if n.startswith('c:'): continue
        mods.setdefault(L.modof(n), 0)
        mods[L.modof(n)] += 1
    used = set()
    for a, b in proj: used |= {a, b}
    nodes = [{"id": m, "items": mods.get(m, 1), "bucket": L.bucket(m)}
             for m in sorted(mods) if m in used]
    links = [{"s": a, "t": b, "w": w} for (a, b), w in proj.items()]
    print(f"mod nodes: {len(nodes)}  edges (w>=3): {len(links)}")
    html = HTML.replace("__NODES__", json.dumps(nodes)).replace("__LINKS__", json.dumps(links))
    open(OUT, 'w', encoding='utf-8').write(html)
    print(f"wrote {OUT}")

HTML = r"""<!doctype html><html><head><meta charset="utf-8"><title>Derpack X — recipe web</title>
<style>
 *{box-sizing:border-box} html,body{margin:0;height:100%;font:13px/1.4 system-ui,sans-serif;background:#10131a;color:#cdd3df}
 #app{display:flex;height:100vh}
 #side{width:300px;flex:none;background:#161a23;border-right:1px solid #232a39;display:flex;flex-direction:column}
 #side h1{font-size:15px;margin:14px 14px 4px}
 #stats{margin:0 14px 8px;padding:8px;background:#1d2330;border-radius:6px;font-variant-numeric:tabular-nums}
 #stats b{color:#7fd1ff} .big{font-size:20px}
 #presets{margin:0 14px 8px;display:flex;flex-wrap:wrap;gap:6px}
 button{background:#27314a;color:#cdd3df;border:1px solid #38445f;border-radius:5px;padding:5px 8px;cursor:pointer;font-size:12px}
 button:hover{background:#324063}
 #search{margin:0 14px 8px;padding:6px 8px;background:#0e1117;border:1px solid #2a3346;border-radius:5px;color:#cdd3df}
 #mods{flex:1;overflow:auto;padding:0 14px 14px}
 .grp{margin-top:8px;color:#8b95a7;text-transform:uppercase;font-size:10px;letter-spacing:.05em}
 label{display:flex;align-items:center;gap:6px;padding:2px 0;cursor:pointer}
 label .sw{width:9px;height:9px;border-radius:2px;flex:none} label .n{color:#94a0b4;margin-left:auto;font-variant-numeric:tabular-nums}
 label.off span.id{text-decoration:line-through;color:#5a6376}
 canvas{flex:1;display:block;cursor:grab} #tip{position:fixed;pointer-events:none;background:#000a;border:1px solid #38445f;border-radius:4px;padding:3px 6px;font-size:12px;display:none}
</style></head><body><div id="app">
 <div id="side">
   <h1>Derpack&nbsp;X — recipe web</h1>
   <div id="stats"></div>
   <div id="presets">
     <button data-p="reset">Reset</button>
     <button data-p="vanilla">Remove vanilla</button>
     <button data-p="create">Remove Create spine</button>
   </div>
   <input id="search" placeholder="filter mods…">
   <div id="mods"></div>
 </div>
 <canvas id="cv"></canvas></div><div id="tip"></div>
<script>
const NODES=__NODES__, LINKS=__LINKS__;
const COL={'block/deco':'#6ab0ff','tech/gear':'#ff8e5a','food':'#7ed66f','organic/mob':'#c98be0',
 'magic':'#e0608f','security':'#d8c24a','misc/util':'#5ad6c4','phantom':'#5a6376','other':'#8b95a7'};
const VANILLA=new Set(['minecraft']);
const CREATE=new Set(NODES.map(n=>n.id).filter(id=>id.startsWith('create')||['tfmg','createaddition','create_ironworks','createbigcannons','cbc_at','createnuclear','create_d2d','createaeronautics','createfood'].includes(id)));
const removed=new Set();
const byId={}; NODES.forEach(n=>byId[n.id]=n);
// adjacency for live component recompute
const ADJ={}; NODES.forEach(n=>ADJ[n.id]=[]);
LINKS.forEach(l=>{ADJ[l.s].push(l.t);ADJ[l.t].push(l.s);});

// ---- live connected components (union-find over ACTIVE nodes) ----
function components(){
 const p={}, active=NODES.filter(n=>!removed.has(n.id)).map(n=>n.id);
 active.forEach(i=>p[i]=i);
 const f=x=>{while(p[x]!==x){p[x]=p[p[x]];x=p[x];}return x;};
 LINKS.forEach(l=>{if(removed.has(l.s)||removed.has(l.t))return;const a=f(l.s),b=f(l.t);if(a!==b)p[a]=b;});
 const comp={}; active.forEach(i=>{const r=f(i);(comp[r]=comp[r]||[]).push(i);});
 const groups=Object.values(comp).sort((a,b)=>b.length-a.length);
 const giant=new Set(groups[0]||[]);
 NODES.forEach(n=>n.giant=giant.has(n.id));
 const items=active.reduce((s,i)=>s+byId[i].items,0);
 const gitems=[...giant].reduce((s,i)=>s+byId[i].items,0);
 return {nc:active.length, comps:groups.length, pct: items? Math.round(100*gitems/items):0};
}
// ---- force layout ----
const cv=document.getElementById('cv'),ctx=cv.getContext('2d');
let W,H; function resize(){W=cv.width=cv.clientWidth;H=cv.height=cv.clientHeight;} window.onresize=resize;
NODES.forEach(n=>{n.x=Math.random()*800-400;n.y=Math.random()*800-400;n.vx=0;n.vy=0;n.r=4+Math.sqrt(n.items);});
let view={x:0,y:0,k:1};
function tick(){
 const act=NODES.filter(n=>!removed.has(n.id));
 for(let i=0;i<act.length;i++){const a=act[i];
   for(let j=i+1;j<act.length;j++){const b=act[j];let dx=a.x-b.x,dy=a.y-b.y,d2=dx*dx+dy*dy+0.01;
     const f=900/d2;dx*=f;dy*=f;a.vx+=dx;a.vy+=dy;b.vx-=dx;b.vy-=dy;}}
 LINKS.forEach(l=>{if(removed.has(l.s)||removed.has(l.t))return;const a=byId[l.s],b=byId[l.t];
   let dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy)+.01;const f=(d-90)*0.012*Math.min(1,l.w/8);
   dx=dx/d*f;dy=dy/d*f;a.vx+=dx;a.vy+=dy;b.vx-=dx;b.vy-=dy;});
 act.forEach(n=>{n.vx-=n.x*0.002;n.vy-=n.y*0.002;n.x+=n.vx*=0.86;n.y+=n.vy*=0.86;});
}
function draw(){
 ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,W,H);
 ctx.setTransform(view.k,0,0,view.k,W/2+view.x,H/2+view.y);
 ctx.lineWidth=0.6/view.k;
 LINKS.forEach(l=>{if(removed.has(l.s)||removed.has(l.t))return;const a=byId[l.s],b=byId[l.t];
   ctx.strokeStyle='rgba(120,140,180,'+Math.min(.5,l.w/40)+')';ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();});
 NODES.forEach(n=>{if(removed.has(n.id))return;
   ctx.beginPath();ctx.arc(n.x,n.y,n.r,0,7);ctx.fillStyle=COL[n.bucket]||COL.other;ctx.fill();
   if(!n.giant){ctx.lineWidth=2/view.k;ctx.strokeStyle='#ff5a5a';ctx.stroke();}
   if(n.r>7||n===hover){ctx.fillStyle='#dfe6f2';ctx.font=(11/view.k)+'px system-ui';ctx.fillText(n.id,n.x+n.r+2,n.y+3);}});
}
let hover=null;
function loop(){tick();draw();requestAnimationFrame(loop);}
// ---- stats + sidebar ----
function refresh(){const s=components();
 document.getElementById('stats').innerHTML=
  `<div class="big"><b>${s.pct}%</b> in the web</div>active mods <b>${s.nc}</b> · separate webs <b>${s.comps}</b>`;}
function buildSidebar(){
 const groups={}; NODES.forEach(n=>{(groups[n.bucket]=groups[n.bucket]||[]).push(n);});
 const box=document.getElementById('mods'); box.innerHTML='';
 Object.keys(groups).sort().forEach(b=>{
   const h=document.createElement('div');h.className='grp';h.textContent=b;box.appendChild(h);
   groups[b].sort((x,y)=>y.items-x.items).forEach(n=>{
     const lab=document.createElement('label');lab.dataset.id=n.id;
     lab.innerHTML=`<input type=checkbox checked><span class=sw style="background:${COL[b]}"></span><span class=id>${n.id}</span><span class=n>${n.items}</span>`;
     lab.querySelector('input').onchange=e=>{e.target.checked?removed.delete(n.id):removed.add(n.id);sync();};
     box.appendChild(lab);});});
}
function sync(){document.querySelectorAll('#mods label').forEach(l=>{
   const off=removed.has(l.dataset.id);l.classList.toggle('off',off);l.querySelector('input').checked=!off;});refresh();}
document.getElementById('presets').onclick=e=>{const p=e.target.dataset.p;if(!p)return;
 if(p==='reset')removed.clear();
 if(p==='vanilla')VANILLA.forEach(m=>removed.add(m));
 if(p==='create')CREATE.forEach(m=>removed.add(m));
 sync();};
document.getElementById('search').oninput=e=>{const q=e.target.value.toLowerCase();
 document.querySelectorAll('#mods label').forEach(l=>l.style.display=l.dataset.id.includes(q)?'flex':'none');};
// ---- canvas interaction ----
let drag=null,pan=null;
cv.onmousedown=e=>{const m=toWorld(e);const n=pick(m);if(n){drag=n;}else{pan={x:e.clientX,y:e.clientY,vx:view.x,vy:view.y};}};
window.onmousemove=e=>{const m=toWorld(e);if(drag){drag.x=m.x;drag.y=m.y;drag.vx=drag.vy=0;}
 else if(pan){view.x=pan.vx+(e.clientX-pan.x);view.y=pan.vy+(e.clientY-pan.y);}
 else{hover=pick(m);const t=document.getElementById('tip');
   if(hover){t.style.display='block';t.style.left=e.clientX+12+'px';t.style.top=e.clientY+12+'px';
     t.textContent=hover.id+' · '+hover.items+' items · '+hover.bucket+(hover.giant?'':' · ISLAND');}else t.style.display='none';}};
window.onmouseup=()=>{drag=pan=null;};
cv.onwheel=e=>{e.preventDefault();const f=e.deltaY<0?1.1:0.9;view.k=Math.max(0.15,Math.min(4,view.k*f));};
function toWorld(e){const r=cv.getBoundingClientRect();return {x:(e.clientX-r.left-W/2-view.x)/view.k,y:(e.clientY-r.top-H/2-view.y)/view.k};}
function pick(m){let best=null,bd=1e9;NODES.forEach(n=>{if(removed.has(n.id))return;const d=Math.hypot(n.x-m.x,n.y-m.y);if(d<n.r+4&&d<bd){bd=d;best=n;}});return best;}
resize();buildSidebar();refresh();loop();
</script></body></html>"""

if __name__ == '__main__':
    main()
