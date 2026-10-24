/* Buxton Bites service worker — offline-ready PWA. Bump VERSION on each release. */
const VERSION="bb-v1";
const CORE_CACHE=`${VERSION}-core`,IMG_CACHE=`${VERSION}-img`;
const CORE=["./","index.html","styles.css","app.js","manifest.webmanifest","assets/buxton-bites-logo.png","assets/mpesa-logo.png","assets/whatsapp-logo.png","assets/splash.jpg","assets/icons/icon-192.png","assets/icons/icon-512.png","assets/icons/apple-touch-icon.png"];

self.addEventListener("install",e=>{e.waitUntil(caches.open(CORE_CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>!k.startsWith(VERSION)).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});

self.addEventListener("message",e=>{
  if(e.data&&e.data.type==="precache"&&Array.isArray(e.data.urls)){
    e.waitUntil(caches.open(IMG_CACHE).then(async c=>{for(const u of e.data.urls){try{if(!(await c.match(u)))await c.add(u)}catch(_){}}}));
  }
  if(e.data&&e.data.type==="skipWaiting")self.skipWaiting();
});

async function networkFirst(req,cacheName){
  const cache=await caches.open(cacheName);
  try{const res=await fetch(req);if(res&&res.ok)cache.put(req,res.clone());return res}
  catch(_){const hit=await cache.match(req,{ignoreSearch:true});if(hit)return hit;if(req.mode==="navigate"){const home=await cache.match("index.html")||await cache.match("./");if(home)return home}throw _}
}
async function staleWhileRevalidate(req,cacheName){
  const cache=await caches.open(cacheName),hit=await cache.match(req);
  const net=fetch(req).then(res=>{if(res&&(res.ok||res.type==="opaque"))cache.put(req,res.clone());return res}).catch(()=>hit);
  return hit||net;
}
self.addEventListener("fetch",e=>{
  const req=e.request;if(req.method!=="GET")return;
  const url=new URL(req.url);
  if(url.origin===location.origin){
    if(req.mode==="navigate"||/\.(html|js|css|webmanifest)$/.test(url.pathname)||url.pathname.endsWith("/"))e.respondWith(networkFirst(req,CORE_CACHE));
    else e.respondWith(staleWhileRevalidate(req,IMG_CACHE));
  }else if(/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)){
    e.respondWith(staleWhileRevalidate(req,IMG_CACHE));
  }
});
