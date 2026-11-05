/* Buxton Bites — location helpers (no map UI).
   reverse(): turns GPS coordinates into a street/area name via OpenStreetMap Nominatim. © OpenStreetMap contributors. */
(function(){
"use strict";
const NOMINATIM="https://nominatim.openstreetmap.org";
async function getJSON(url){
 const ctl=new AbortController();const t=setTimeout(()=>ctl.abort(),7000);
 try{const r=await fetch(url,{signal:ctl.signal});if(!r.ok)return null;return await r.json()}catch(_){return null}finally{clearTimeout(t)}
}
const uniq=a=>a.filter(Boolean).filter((v,i,arr)=>arr.findIndex(x=>String(x).toLowerCase()===String(v).toLowerCase())===i).slice(0,3);
/* Provider 1: Nominatim (OpenStreetMap) */
async function viaNominatim(lat,lng){
 for(const zoom of [18,16]){
  const d=await getJSON(NOMINATIM+"/reverse?format=jsonv2&addressdetails=1&namedetails=1&zoom="+zoom+"&accept-language=en&lat="+lat+"&lon="+lng);
  if(!d||d.error)continue;const a=d.address||{},nd=d.namedetails||{};
  const placeCats=["amenity","office","shop","tourism","building","man_made","leisure","public_transport","railway","aeroway"];
  const poi=placeCats.includes(d.category)&&(nd.name||d.name)?(nd.name||d.name):(a.amenity||a.office||a.shop||a.tourism||"");
  const road=a.road||a.pedestrian||a.footway||a.path||"";
  const area=a.neighbourhood||a.suburb||a.quarter||a.city_district||"";
  const short=uniq([poi,road,area]).join(", ");
  if(short)return{name:d.display_name||"",short};
 }
 return null}
/* Provider 2: Photon (also OpenStreetMap data, different server) — used if Nominatim fails or has nothing */
async function viaPhoton(lat,lng){
 const d=await getJSON("https://photon.komoot.io/reverse?lang=en&lat="+lat+"&lon="+lng);
 const p=d&&d.features&&d.features[0]&&d.features[0].properties;if(!p)return null;
 const short=uniq([p.name&&p.name!==p.street?p.name:"",p.street,p.district||p.locality||p.suburb]).join(", ");
 return short?{name:[short,p.city,p.country].filter(Boolean).join(", "),short}:null}
/* Returns {name, short}. short is a ready-to-use delivery address such as "GPO, Digo Road, Old Town" or "Baluchi Street, Ganjoni". */
async function reverse(lat,lng){return (await viaNominatim(lat,lng))||(await viaPhoton(lat,lng))}
window.BBMapPicker={reverse,
 osmLink:(lat,lng)=>`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=18/${lat}/${lng}`,
 gmapsLink:(lat,lng)=>`https://www.google.com/maps?q=${lat},${lng}`};
})();
