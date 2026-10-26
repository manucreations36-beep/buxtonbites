/* Buxton Bites — OpenStreetMap location picker (no external library).
   Slippy map using OSM raster tiles + Nominatim search. © OpenStreetMap contributors. */
(function(){
"use strict";
const TILE="https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const NOMINATIM="https://nominatim.openstreetmap.org";
const DEFAULT={lat:-4.0435,lng:39.6682,z:13}; // Mombasa
const TS=256,MINZ=3,MAXZ=19;
const lngToX=(lng,z)=>(lng+180)/360*TS*2**z;
const latToY=(lat,z)=>{const r=lat*Math.PI/180;return(1-Math.log(Math.tan(r)+1/Math.cos(r))/Math.PI)/2*TS*2**z};
const xToLng=(x,z)=>x/(TS*2**z)*360-180;
const yToLat=(y,z)=>{const n=Math.PI-2*Math.PI*y/(TS*2**z);return 180/Math.PI*Math.atan(.5*(Math.exp(n)-Math.exp(-n)))};
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
const $=id=>document.getElementById(id);

let built=false,root,mapEl,tilesEl,coordsEl,msgEl,resEl,okBtn;
let z=DEFAULT.z,cx=lngToX(DEFAULT.lng,z),cy=latToY(DEFAULT.lat,z);
let tiles=new Map(),onConfirm=null,lastFocus=null,coordTimer;

function build(){
 if(built)return;built=true;
 root=document.createElement("div");root.className="mp";root.id="mp";root.hidden=true;root.setAttribute("role","dialog");root.setAttribute("aria-modal","true");root.setAttribute("aria-label","Pin your exact location");
 root.innerHTML=`<div class="mp-card">
 <div class="mp-head"><h3>Pin your exact location</h3><button type="button" class="mp-x" id="mp-close" aria-label="Close map">✕</button></div>
 <form class="mp-search" id="mp-searchform" autocomplete="off"><input id="mp-q" type="search" placeholder="Search street, estate or landmark…" aria-label="Search for a place"><button type="submit">Search</button></form>
 <ul class="mp-results" id="mp-results" hidden></ul>
 <div class="mp-map" id="mp-map" tabindex="0" aria-label="Map. Drag to move, pinch or use the buttons to zoom.">
  <div class="mp-tiles" id="mp-tiles"></div>
  <div class="mp-pin" aria-hidden="true"><svg viewBox="0 0 32 44" width="38" height="52"><path d="M16 0C7.2 0 0 7 0 15.6 0 27.5 16 44 16 44s16-16.5 16-28.4C32 7 24.8 0 16 0z" fill="#d03a1d"/><circle cx="16" cy="15.5" r="6" fill="#fff"/></svg><i class="mp-dot"></i></div>
  <div class="mp-ctl"><button type="button" id="mp-zin" aria-label="Zoom in">＋</button><button type="button" id="mp-zout" aria-label="Zoom out">－</button><button type="button" id="mp-me" aria-label="Use my current location" title="Use my current location">◎</button></div>
  <div class="mp-hint">Move the map so the pin sits on your exact spot</div>
  <div class="mp-attr"><a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap contributors</a></div>
 </div>
 <div class="mp-foot"><div class="mp-info"><div class="mp-coords" id="mp-coords"></div><div class="mp-msg" id="mp-msg" role="status"></div></div><button type="button" class="mp-confirm" id="mp-ok">Confirm location</button></div></div>`;
 document.body.appendChild(root);
 mapEl=$("mp-map");tilesEl=$("mp-tiles");coordsEl=$("mp-coords");msgEl=$("mp-msg");resEl=$("mp-results");okBtn=$("mp-ok");
 $("mp-close").onclick=close;
 root.addEventListener("click",e=>{if(e.target===root)close()});
 addEventListener("keydown",e=>{if(root.hidden)return;if(e.key==="Escape")close();
  if(document.activeElement===mapEl){const s=80;if(e.key==="ArrowLeft"){pan(-s,0)}else if(e.key==="ArrowRight"){pan(s,0)}else if(e.key==="ArrowUp"){pan(0,-s)}else if(e.key==="ArrowDown"){pan(0,s)}else if(e.key==="+"||e.key==="="){zoomBy(1)}else if(e.key==="-"){zoomBy(-1)}else return;e.preventDefault()}});
 $("mp-zin").onclick=()=>zoomBy(1);$("mp-zout").onclick=()=>zoomBy(-1);
 $("mp-me").onclick=locate;
 $("mp-searchform").addEventListener("submit",e=>{e.preventDefault();search($("mp-q").value.trim())});
 okBtn.onclick=confirm;
 addEventListener("resize",()=>{if(!root.hidden)render()});
 gestures();
}

/* ---------- rendering ---------- */
function render(){
 const W=mapEl.clientWidth,H=mapEl.clientHeight;if(!W||!H)return;
 const n=2**z,x0=cx-W/2,y0=cy-H/2;
 const tx0=Math.floor(x0/TS),tx1=Math.floor((x0+W)/TS),ty0=Math.max(0,Math.floor(y0/TS)),ty1=Math.min(n-1,Math.floor((y0+H)/TS));
 const need=new Set();
 for(let ty=ty0;ty<=ty1;ty++)for(let tx=tx0;tx<=tx1;tx++){
  const key=z+"/"+tx+"/"+ty;need.add(key);let img=tiles.get(key);
  if(!img){img=new Image();img.className="mp-t";img.alt="";img.draggable=false;img.decoding="async";
   img.src=TILE.replace("{z}",z).replace("{x}",((tx%n)+n)%n).replace("{y}",ty);
   img.onload=()=>img.classList.add("in");tilesEl.appendChild(img);tiles.set(key,img)}
  img.style.transform="translate("+Math.round(tx*TS-x0)+"px,"+Math.round(ty*TS-y0)+"px)";
 }
 for(const[key,img]of tiles)if(!need.has(key)){img.remove();tiles.delete(key)}
 clearTimeout(coordTimer);coordTimer=setTimeout(showCoords,80);
}
function center(){let lng=xToLng(cx,z);lng=((lng+540)%360)-180;return{lat:clamp(yToLat(cy,z),-85,85),lng}}
function showCoords(){const c=center();coordsEl.textContent="📍 "+c.lat.toFixed(5)+", "+c.lng.toFixed(5)}
function setView(lat,lng,nz){z=clamp(Math.round(nz),MINZ,MAXZ);cx=lngToX(lng,z);cy=latToY(clamp(lat,-85,85),z);for(const[,i]of tiles)i.remove();tiles.clear();render()}
function pan(dx,dy){cx+=dx;cy+=dy;const max=TS*2**z;cy=clamp(cy,0,max);render()}
function zoomBy(d){const c=center();setView(c.lat,c.lng,z+d)}
function say(t,err){msgEl.textContent=t||"";msgEl.classList.toggle("err",!!err)}

/* ---------- gestures: drag, wheel, double-tap, pinch ---------- */
function gestures(){
 const ptrs=new Map();let pinch=null,wheelT=0;
 mapEl.addEventListener("pointerdown",e=>{if(e.target.closest(".mp-ctl,.mp-attr"))return;try{mapEl.setPointerCapture(e.pointerId)}catch(_){}
  ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY});mapEl.classList.add("drag");
  if(ptrs.size===2){const[a,b]=[...ptrs.values()];pinch={d:Math.hypot(a.x-b.x,a.y-b.y)||1,z0:z,s:1}}});
 mapEl.addEventListener("pointermove",e=>{const p=ptrs.get(e.pointerId);if(!p)return;
  if(ptrs.size===1){pan(-(e.clientX-p.x),-(e.clientY-p.y));p.x=e.clientX;p.y=e.clientY}
  else if(pinch){p.x=e.clientX;p.y=e.clientY;const[a,b]=[...ptrs.values()];pinch.s=(Math.hypot(a.x-b.x,a.y-b.y)||1)/pinch.d;tilesEl.style.transform="scale("+clamp(pinch.s,.4,3)+")"}});
 const end=e=>{if(!ptrs.has(e.pointerId))return;ptrs.delete(e.pointerId);
  if(pinch&&ptrs.size<2){const dz=Math.round(Math.log2(pinch.s));tilesEl.style.transform="";const c=center();const nz=clamp(pinch.z0+dz,MINZ,MAXZ);pinch=null;setView(c.lat,c.lng,nz)}
  if(!ptrs.size)mapEl.classList.remove("drag")};
 mapEl.addEventListener("pointerup",end);mapEl.addEventListener("pointercancel",end);
 mapEl.addEventListener("wheel",e=>{e.preventDefault();const t=Date.now();if(t-wheelT<220)return;wheelT=t;zoomBy(e.deltaY<0?1:-1)},{passive:false});
 mapEl.addEventListener("dblclick",e=>{if(e.target.closest(".mp-ctl"))return;zoomBy(1)});
}

/* ---------- search (Nominatim) ---------- */
async function search(q){
 if(!q){return}
 say("Searching…");resEl.hidden=true;resEl.innerHTML="";
 try{
  const url=NOMINATIM+"/search?format=jsonv2&limit=6&addressdetails=0&countrycodes=ke&accept-language=en&viewbox=39.45,-3.85,39.85,-4.25&q="+encodeURIComponent(q+(/mombasa/i.test(q)?"":", Mombasa"));
  const r=await fetch(url,{headers:{Accept:"application/json"}});if(!r.ok)throw new Error("search failed");
  const d=await r.json();say("");
  if(!d.length){resEl.innerHTML='<li class="none">No places found. Try a nearby landmark, or move the map yourself.</li>';resEl.hidden=false;return}
  resEl.innerHTML=d.map((p,i)=>`<li><button type="button" data-i="${i}">${esc(p.display_name)}</button></li>`).join("");resEl.hidden=false;
  resEl.onclick=e=>{const b=e.target.closest("button[data-i]");if(!b)return;const p=d[+b.dataset.i];resEl.hidden=true;setView(+p.lat,+p.lon,17);say("Now nudge the map until the pin is exactly on your door/gate.")};
 }catch(_){say("Couldn't search right now. You can still move the map to your spot.",true)}
}
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

/* ---------- geolocation ---------- */
function locate(){
 if(!navigator.geolocation){say("Your device doesn't support location. Move the map to your spot instead.",true);return}
 say("Finding you…");
 navigator.geolocation.getCurrentPosition(p=>{setView(p.coords.latitude,p.coords.longitude,18);say("Got it — nudge the pin if needed, then confirm.")},
  err=>say(err.code===1?"Location access is off. Allow it in your browser settings, or move the map to your spot.":"Couldn't get your location. Move the map to your spot instead.",true),
  {enableHighAccuracy:true,timeout:12000,maximumAge:30000});
}

/* ---------- confirm ---------- */
async function reverse(lat,lng){
 try{const ctl=new AbortController();const t=setTimeout(()=>ctl.abort(),3500);
  const r=await fetch(NOMINATIM+"/reverse?format=jsonv2&zoom=18&accept-language=en&lat="+lat+"&lon="+lng,{signal:ctl.signal,headers:{Accept:"application/json"}});clearTimeout(t);
  if(!r.ok)return null;const d=await r.json(),a=d.address||{};
  const short=[a.road||a.pedestrian||a.neighbourhood,a.suburb||a.neighbourhood||a.city_district].filter(Boolean).filter((v,i,arr)=>arr.indexOf(v)===i).join(", ");
  return{name:d.display_name||"",short}}catch(_){return null}
}
async function confirm(){
 const c=center();okBtn.disabled=true;okBtn.textContent="Saving…";
 const rev=await reverse(c.lat.toFixed(6),c.lng.toFixed(6));
 okBtn.disabled=false;okBtn.textContent="Confirm location";
 const out={lat:+c.lat.toFixed(6),lng:+c.lng.toFixed(6),name:rev&&rev.name||"",shortName:rev&&rev.short||""};
 close();if(onConfirm)onConfirm(out);
}

/* ---------- open / close ---------- */
function open(opts){
 build();opts=opts||{};onConfirm=opts.onConfirm||null;lastFocus=document.activeElement;
 root.hidden=false;document.documentElement.classList.add("mp-open");say("");resEl.hidden=true;$("mp-q").value="";
 const has=isFinite(opts.lat)&&isFinite(opts.lng)&&opts.lat!==null&&opts.lng!==null&&opts.lat!==0;
 requestAnimationFrame(()=>{ if(has)setView(opts.lat,opts.lng,17);else{setView(DEFAULT.lat,DEFAULT.lng,DEFAULT.z);if(opts.autoLocate!==false)say("Tip: tap ◎ to jump to your current location.")} mapEl.focus({preventScroll:true}) });
}
function close(){if(!root||root.hidden)return;root.hidden=true;document.documentElement.classList.remove("mp-open");if(lastFocus&&lastFocus.focus)try{lastFocus.focus()}catch(_){}}

window.BBMapPicker={open,close,
 osmLink:(lat,lng)=>`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=18/${lat}/${lng}`,
 gmapsLink:(lat,lng)=>`https://www.google.com/maps?q=${lat},${lng}`,
 _debug:{center,setView,get z(){return z}}};
})();
