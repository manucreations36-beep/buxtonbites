const APP_VERSION="12";
/* Self-heal: if index.html and app.js come from different releases (stale cache / partial upload), wipe caches and reload once. */
(function(){try{const m=document.querySelector('meta[name="bb-version"]');if((m?m.content:"0")===APP_VERSION||sessionStorage.getItem("bb-heal"))return;sessionStorage.setItem("bb-heal","1");
 (async()=>{try{if(navigator.serviceWorker){const rs=await navigator.serviceWorker.getRegistrations();await Promise.all(rs.map(r=>r.unregister()))}if(window.caches){const ks=await caches.keys();await Promise.all(ks.map(k=>caches.delete(k)))}}catch(_){}
  location.replace(location.pathname+"?v="+APP_VERSION+location.hash)})()}catch(_){}})();
const WHATSAPP_NUMBER = "254791511386";
const ico=n=>`<svg class="ic" aria-hidden="true"><use href="#i-${n}"/></svg>`;
const money = n => "KSh " + Number(n).toLocaleString("en-KE");
const products = [
{id:"mahamri",name:"Mahamri (3 for)",price:50,category:"Breakfast",image:"assets/breakfast/mahamri.jpg",description:"Soft, lightly sweet coastal favourites."},
{id:"mitai",name:"Mitai",price:10,category:"Breakfast",image:"assets/breakfast/mitai.jpg",description:"A sweet bite to enjoy any time."},
{id:"viazi-karai",name:"Viazi karai (per plate)",price:100,category:"Breakfast",image:"assets/breakfast/viazi-karai.jpg",description:"Crispy spiced potato bites."},
{id:"mbahazi-nazi",name:"Mbahazi nazi",price:150,category:"Breakfast",image:"assets/breakfast/mbahazi-nazi.jpg",description:"A coastal classic with coconut."},
{id:"bajia",name:"Bajia (per plate)",price:100,category:"Breakfast",image:"assets/breakfast/bajia.jpg",description:"Golden, savoury and full of flavour."},
{id:"maru-bhajia",name:"Maru bhajia (per plate)",price:150,category:"Breakfast",image:"assets/breakfast/maru-bhajia.jpg",description:"Crisp bhajia served coastal style."},
{id:"beef-sambusa",name:"Beef sambusa (pc)",price:80,category:"Breakfast",image:"assets/breakfast/beef-sambusa.jpg",description:"A savoury, crunchy snack."},
{id:"veg-sambusa",name:"Veg sambusa (pc)",price:60,category:"Breakfast",image:"assets/breakfast/veg-sambusa.jpg",description:"A golden vegetable-filled pastry."},
{id:"kebab",name:"Kebab (per plate)",price:150,category:"Breakfast",image:"assets/breakfast/kebab.jpg",description:"A satisfying savoury favourite."},
{id:"chapati",name:"Chapati",price:50,category:"Breakfast",image:"assets/breakfast/chapati.jpg",description:"Soft, freshly prepared chapati."},
{id:"kienyeji-soup",name:"Kienyeji chicken soup",price:350,category:"Breakfast",image:"assets/breakfast/kienyeji-chicken-soup.jpg",description:"Comforting, warming chicken soup."},
{id:"paya-soup",name:"Paya soup",price:300,category:"Breakfast",image:"assets/breakfast/paya-soup.jpg",description:"A rich, warming soup."},
{id:"special-milk-tea-single",name:"Special milk tea, single",price:150,category:"Hot Drinks",image:"assets/hot-drinks/special-milk-tea-single.jpg",description:"A comforting cup of spiced milk tea."},
{id:"special-milk-tea-teapot",name:"Special milk tea, teapot",price:450,category:"Hot Drinks",image:"assets/hot-drinks/special-milk-tea-teapot.jpg",description:"A teapot to share or savour slowly."},
{id:"black-masala-single",name:"Black masala tea, single",price:100,category:"Hot Drinks",image:"assets/hot-drinks/black-masala-tea-single.jpg",description:"Bold black tea with warming masala."},
{id:"black-masala-teapot",name:"Black masala tea, teapot",price:350,category:"Hot Drinks",image:"assets/hot-drinks/black-masala-tea-teapot.jpg",description:"Masala tea served by the teapot."},
{id:"dawa",name:"Special dawa",price:300,category:"Hot Drinks",image:"assets/hot-drinks/special-dawa.jpg",description:"A warming, zesty favourite."},
{id:"arabic-coffee",name:"Arabic coffee",price:350,category:"Hot Drinks",image:"assets/hot-drinks/arabic-coffee.jpg",description:"Fragrant coffee with a distinctive flavour."},
{id:"tamarind",name:"Tamarind juice",price:150,category:"Cold Drinks",image:"assets/cold-drinks/tamarind-juice.jpg",description:"Sweet, tangy and refreshing."},
{id:"orange",name:"Orange juice",price:250,category:"Cold Drinks",image:"assets/cold-drinks/orange-juice.jpg",description:"A bright citrus refreshment."},
{id:"mango",name:"Mango juice",price:300,category:"Cold Drinks",image:"assets/cold-drinks/mango-juice.jpg",description:"Sweet tropical mango flavour."},
{id:"passion",name:"Passion",price:200,category:"Cold Drinks",image:"assets/cold-drinks/passion-juice.jpg",description:"Fresh, tangy passion fruit flavour."},
{id:"pineapple",name:"Pineapple",price:350,category:"Cold Drinks",image:"assets/cold-drinks/pineapple-juice.jpg",description:"Tropical pineapple refreshment."},
{id:"watermelon",name:"Watermelon",price:300,category:"Cold Drinks",image:"assets/cold-drinks/watermelon-juice.jpg",description:"Light and refreshing watermelon."},
{id:"water",name:"Water",price:50,category:"Cold Drinks",image:"assets/cold-drinks/water.jpg",description:"A simple refreshment."},
{id:"coca-cola",name:"Coca-Cola",price:100,category:"Cold Drinks",image:"assets/cold-drinks/coca-cola.jpg",description:"Classic, ice-cold Coca-Cola."},
{id:"fanta-orange",name:"Fanta Orange",price:100,category:"Cold Drinks",image:"assets/cold-drinks/fanta-orange.jpg",description:"Bright, bubbly orange soda."},
{id:"fanta-passion",name:"Fanta Passion",price:100,category:"Cold Drinks",image:"assets/cold-drinks/fanta-passion.jpg",description:"Sweet, fruity passion soda."},
{id:"sprite-bottle",name:"Sprite (bottle)",price:100,category:"Cold Drinks",image:"assets/cold-drinks/sprite-bottle.jpg",description:"Crisp lemon-lime refreshment."},
{id:"sprite-can",name:"Sprite (can)",price:100,category:"Cold Drinks",image:"assets/cold-drinks/sprite-can.jpg",description:"Crisp lemon-lime in a can."},
{id:"pilau",name:"Signature pilau",price:550,category:"Lunch / Dinner",image:"assets/lunch-dinner/signature-pilau.jpg",description:"Served with salad and chilli."},
{id:"chicken-biriani",name:"Chicken biriani",price:600,category:"Lunch / Dinner",image:"assets/lunch-dinner/chicken-biriani.jpg",description:"Aromatic rice with chicken and spices."},
{id:"beef-biriani",name:"Beef biriani",price:750,category:"Lunch / Dinner",image:"assets/lunch-dinner/beef-biriani.jpg",description:"Fragrant biriani served with tender beef."},
{id:"mutton-mandhi",name:"Mutton mandhi",price:1200,category:"Lunch / Dinner",image:"assets/lunch-dinner/mutton-mandhi.jpg",description:"A generous, fragrant rice and mutton meal."},
{id:"coconut-chicken",name:"Coconut chicken",price:550,category:"Lunch / Dinner",image:"assets/lunch-dinner/coconut-chicken.jpg",description:"Choose rice, chips or naan at checkout notes."},
{id:"coconut-fish",name:"Coconut fish",price:750,category:"Lunch / Dinner",image:"assets/lunch-dinner/coconut-fish.jpg",description:"Coastal coconut fish with rice, chips or naan."},
{id:"beef-wet-fry",name:"Beef wet fry",price:650,category:"Lunch / Dinner",image:"assets/lunch-dinner/beef-wet-fry.jpg",description:"With rice, ugali or chapati; vegetables or kachumbari."},
{id:"maharagwe",name:"Maharagwe nazi",price:350,category:"Lunch / Dinner",image:"assets/lunch-dinner/maharagwe-nazi.jpg",description:"Coconut beans with rice, ugali or chapati."},
{id:"chips-plain",name:"Chips plain",price:200,category:"Lunch / Dinner",image:"assets/lunch-dinner/chips-plain.jpg",description:"Classic golden chips."},
{id:"chips-masala",name:"Chips masala",price:300,category:"Lunch / Dinner",image:"assets/lunch-dinner/chips-masala.jpg",description:"Chips tossed in flavourful masala."},
{id:"chips-poussin",name:"Chips poussin",price:300,category:"Lunch / Dinner",image:"assets/lunch-dinner/chips-poussin.jpg",description:"Spicy, savoury poussin-style chips."},
{id:"poussin-half",name:"Chicken poussin, half",price:850,category:"Lunch / Dinner",image:"assets/lunch-dinner/chicken-poussin-half.jpg",description:"Half chicken prepared poussin style."},
{id:"poussin-full",name:"Chicken poussin, full",price:1350,category:"Lunch / Dinner",image:"assets/lunch-dinner/chicken-poussin-full.jpg",description:"Full chicken prepared poussin style."},
{id:"lemon-herb",name:"Lemon and herb chicken",price:450,category:"Lunch / Dinner",image:"assets/lunch-dinner/lemon-and-herb-chicken.jpg",description:"Chicken with zesty lemon and herbs."},
{id:"bbq-wings",name:"BBQ wings",price:400,category:"Lunch / Dinner",image:"assets/lunch-dinner/bbq-wings.jpg",description:"Wings coated in smoky BBQ flavour."},
{id:"sausage",name:"Sausage",price:80,category:"Lunch / Dinner",image:"assets/lunch-dinner/sausage.jpg",description:"A simple savoury side."},
{id:"plain-naan",name:"Plain naan",price:100,category:"Lunch / Dinner",image:"assets/lunch-dinner/plain-naan.jpg",description:"Soft naan bread."},
{id:"buttered-naan",name:"Buttered naan",price:150,category:"Lunch / Dinner",image:"assets/lunch-dinner/buttered-naan.jpg",description:"Warm naan finished with butter."}
];
const DELIVERY_ZONES=[
{group:"Mombasa Island",areas:["Old Town","Ganjoni","Tudor","Kizingo","Buxton","Makupa","Tononoka","Mbaraki"]},
{group:"North Mainland",areas:["Nyali","Mkomani","Kongowea","Kisauni","Bamburi","Shanzu","Mtwapa"]},
{group:"West Mainland",areas:["Changamwe","Port Reitz / Airport","Miritini","Jomvu","Mikindani","Chaani"]},
{group:"South Mainland",areas:["Likoni","Mtongwe","Shelly Beach"]}
];
/* Standard delivery fee (KSh) per area. Edit freely; areas without a fee show "confirmed on WhatsApp". */
const PIN_REQUIRED=false; // pin comes from "Use my current location"; the street/address field is what is required
const DELIVERY_FEES={
"Old Town":150,"Ganjoni":150,"Tudor":150,"Kizingo":150,"Buxton":100,"Makupa":150,"Tononoka":150,"Mbaraki":150,
"Nyali":250,"Mkomani":250,"Kongowea":250,"Kisauni":300,"Bamburi":300,"Shanzu":400,"Mtwapa":450,
"Changamwe":300,"Port Reitz / Airport":350,"Miritini":400,"Jomvu":350,"Mikindani":350,"Chaani":350,
"Likoni":300,"Mtongwe":350,"Shelly Beach":400
};

const HERO_SLIDES=[
{id:"pilau",eyebrow:"MADE WITH LOVE IN MOMBASA",title:"Taste<br><em>ya Pwani.</em>",text:"From coastal breakfast bites to comforting biriani and signature pilau — your next favourite meal is just a WhatsApp message away.",img:"assets/lunch-dinner/signature-pilau.jpg",emoji:"flame"},
{id:"mahamri",eyebrow:"COASTAL BREAKFAST",title:"Start the day<br><em>the Swahili way.</em>",text:"Soft, fragrant mahamri, mbahazi and warm bites to kick off your morning.",img:"assets/breakfast/mahamri.jpg",emoji:"croissant"},
{id:"mutton-mandhi",eyebrow:"LUNCH & DINNER",title:"Rich, aromatic<br><em>mandhi.</em>",text:"Hearty mains, biriani and coconut dishes — made for a proper sit-down meal.",img:"assets/lunch-dinner/mutton-mandhi.jpg",emoji:"beef"},
{id:"dawa",eyebrow:"HOT DRINKS",title:"Warm up with<br><em>special dawa.</em>",text:"Spiced teas, milk tea and Arabic coffee to keep you cosy, any time of day.",img:"assets/hot-drinks/special-dawa.jpg",emoji:"coffee"},
{id:"mango",eyebrow:"FRESH & COOL",title:"Cool down,<br><em>coastal style.</em>",text:"Mango, passion, pineapple and more — chilled juices and sodas to pair with any meal.",img:"assets/cold-drinks/mango-juice.jpg",emoji:"citrus"}
];

const MIN_LEAD_MINUTES=60; // earliest a same-day exact time can be booked
const fmtTime=(h,m)=>`${((h+11)%12)+1}:${String(m).padStart(2,"0")} ${h<12?"AM":"PM"}`;
const dayLabel=n=>{const d=new Date();d.setDate(d.getDate()+n);const s=d.toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short"});return n===0?`Today, ${s}`:n===1?`Tomorrow, ${s}`:s};
const cart = new Map();
let activeCategory = "All";
const $ = id => document.getElementById(id);
const grid = $("product-grid");
$("zone").innerHTML='<option value="">Select your area</option>'+DELIVERY_ZONES.map(g=>`<optgroup label="${g.group}">${g.areas.map(x=>`<option value="${x}">${x} — ${money(DELIVERY_FEES[x])}</option>`).join("")}</optgroup>`).join("")+'<option>Other area in Mombasa — confirm on WhatsApp</option>';
$("zone-grid").innerHTML=DELIVERY_ZONES.map(g=>`<div class="zone-card"><h3>${g.group}</h3><div class="zone-chips">${g.areas.map(x=>`<span>${x}<b>${money(DELIVERY_FEES[x])}</b></span>`).join("")}</div></div>`).join("");
function updateDelivery(){const pickup=$("order-type").value==="Pickup",z=$("zone").value,fee=DELIVERY_FEES[z];let txt="Select an area";if(pickup)txt="None (pickup)";else if(typeof fee==="number")txt=money(fee);else if(z)txt="Confirmed on WhatsApp";$("checkout-delivery").textContent=txt;const known=pickup||typeof fee==="number";$("total-row").hidden=!known;const tot=subtotal()+(pickup?0:(fee||0));if(known)$("checkout-total").textContent=money(tot);
const mp=$("payment").value.startsWith("M-Pesa");$("pay-panel").hidden=!mp;const code=$("mpesa-code");code.required=mp&&known;$("pay-amount").textContent=known?money(tot):(z?money(subtotal())+" (food) + delivery fee":"Select a delivery area first")}
function renderProducts(){
  const q = $("search").value.trim().toLowerCase();
  const filtered = products.filter(p => (activeCategory==="All" || p.category===activeCategory) && (!q || (p.name+" "+p.category+" "+p.description).toLowerCase().includes(q)));
  grid.innerHTML = filtered.map(p => `<article class="product-card"><div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy"><span class="product-category">${p.category==="Lunch / Dinner"?"Lunch & dinner":p.category}</span></div><div class="product-info"><h3>${p.name}</h3><p>${p.description}</p><div class="product-bottom"><span class="price">${money(p.price)}</span><button class="add-button" data-add="${p.id}" aria-label="Add ${p.name} to order"><i>+</i> Add</button></div></div></article>`).join("");
  $("results-label").textContent = q || activeCategory!=="All" ? `${filtered.length} menu item${filtered.length===1?"":"s"}` : "Our menu";
  $("empty-state").hidden = filtered.length>0;
}
function subtotal(){let sum=0;cart.forEach((qty,id)=>{const p=products.find(x=>x.id===id);if(p)sum+=p.price*qty});return sum}
function totalQty(){let n=0;cart.forEach(q=>n+=q);return n}
function renderCart(){
  const count=totalQty();$("cart-count").textContent=count;document.querySelectorAll(".m-count").forEach(e=>{e.textContent=count;e.hidden=!count});$("drawer-count").textContent=`(${count})`;
  $("cart-items").innerHTML=[...cart.entries()].map(([id,qty])=>{const p=products.find(x=>x.id===id);return `<div class="cart-row"><img src="${p.image}" alt=""><div><h4>${p.name}</h4><div class="line-price">${money(p.price*qty)}</div><div class="quantity"><button data-qty="${id}" data-delta="-1" aria-label="Decrease quantity">−</button><span>${qty}</span><button data-qty="${id}" data-delta="1" aria-label="Increase quantity">+</button></div><button class="remove-item" data-remove="${id}">Remove</button></div></div>`}).join("");
  $("cart-empty").hidden=count>0;$("cart-bottom").hidden=count===0;$("cart-subtotal").textContent=money(subtotal());$("checkout-subtotal").textContent=money(subtotal());updateDelivery();
}
function toast(msg){const el=$("toast");el.textContent=msg;el.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove("show"),2300)}
function openCart(){$("cart-drawer").classList.add("open");$("overlay").classList.add("show");$("cart-drawer").setAttribute("aria-hidden","false");document.body.classList.add("no-scroll")}
function closeCart(){$("cart-drawer").classList.remove("open");$("overlay").classList.remove("show");$("cart-drawer").setAttribute("aria-hidden","true");document.body.classList.remove("no-scroll")}
document.addEventListener("click",e=>{
  const add=e.target.closest("[data-add]");if(add){const id=add.dataset.add;cart.set(id,(cart.get(id)||0)+1);renderCart();toast("Added to your order");return}
  const qty=e.target.closest("[data-qty]");if(qty){const id=qty.dataset.qty,next=(cart.get(id)||0)+Number(qty.dataset.delta);if(next<=0)cart.delete(id);else cart.set(id,next);renderCart();return}
  const remove=e.target.closest("[data-remove]");if(remove){cart.delete(remove.dataset.remove);renderCart();return}
  const tab=e.target.closest("[data-category]");if(tab){activeCategory=tab.dataset.category;document.querySelectorAll("[data-category]").forEach(b=>b.classList.toggle("active",b.dataset.category===activeCategory));renderProducts()}
});
$("search").addEventListener("input",renderProducts);
$("open-cart").addEventListener("click",openCart);$("close-cart").addEventListener("click",closeCart);$("overlay").addEventListener("click",closeCart);
$("browse-menu").addEventListener("click",()=>{closeCart();$("menu").scrollIntoView({behavior:"smooth"})});
$("go-checkout").addEventListener("click",()=>{if(!cart.size)return;closeCart();$("checkout-modal").hidden=false;document.body.classList.add("no-scroll")});
$("close-checkout").addEventListener("click",()=>{$("checkout-modal").hidden=true;document.body.classList.remove("no-scroll")});
$("checkout-modal").addEventListener("click",e=>{if(e.target===$("checkout-modal")){$("checkout-modal").hidden=true;document.body.classList.remove("no-scroll")}});
$("order-type").addEventListener("change",e=>{const pickup=e.target.value==="Pickup";$("address-label").firstChild.textContent=pickup?"Pickup note / preferred time":"Street / delivery address";$("address").required=!pickup;$("address").placeholder=pickup?"Optional collection note":"Street, estate, building, landmark";$("zone-label").hidden=pickup;$("zone").required=!pickup;updateDelivery()});
$("zone").addEventListener("change",updateDelivery);$("payment").addEventListener("change",updateDelivery);$("mpesa-code").addEventListener("input",e=>{e.target.value=e.target.value.toUpperCase().replace(/[^A-Z0-9]/g,"")});$("copy-till-checkout").addEventListener("click",()=>$("copy-till").click());
$("copy-till").addEventListener("click",async()=>{try{await navigator.clipboard.writeText("1817896");toast("Till number copied: 1817896")}catch{toast("M-Pesa Till Number: 1817896")}});

/* ===== Checkout validation (inline messages) + Terms/Privacy ===== */
function clearErrors(){const f=$("checkout-form");f.querySelectorAll(".field-err").forEach(n=>n.remove());f.querySelectorAll("[aria-invalid]").forEach(n=>{n.removeAttribute("aria-invalid");n.classList.remove("invalid")});$("agree-label").classList.remove("invalid");$("pin-box").classList.remove("invalid");$("form-errors").hidden=true}
function markErr(el,msg){const box=el.id==="pin-box"?el:null;el.setAttribute?.("aria-invalid","true");el.classList.add("invalid");const holder=el.closest("label")||el;const p=document.createElement("p");p.className="field-err";p.textContent=msg;p.id="err-"+(el.id||el.name);
 if(el.type==="checkbox"||box)holder.insertAdjacentElement("afterend",p);else holder.appendChild(p);if(el.type==="checkbox")$("agree-label").classList.add("invalid")}
function validateCheckout(){
 const f=$("checkout-form"),v=n=>String(f.elements[n].value||"").trim(),pickup=v("orderType")==="Pickup",errs=[];
 const add=(el,msg,label)=>errs.push({el,msg,label});
 if(!v("customerName"))add(f.elements.customerName,"Please enter your name.","Your name");
 const digits=v("phone").replace(/[\s\-()+]/g,"");
 if(!v("phone"))add(f.elements.phone,"Please enter your phone number so we can reach you.","Phone number");
 else if(!/^(?:254|0)?[17]\d{8}$/.test(digits))add(f.elements.phone,"That phone number doesn't look right. Use a Kenyan number like 0712 345 678.","Phone number");
 if(!pickup){
  if(!v("zone"))add(f.elements.zone,"Please choose your delivery area so we can work out the fee.","Delivery area");
  if(!v("address"))add(f.elements.address,"Please enter your estate, building or landmark.","Delivery address");
  else if(v("address").length<3)add(f.elements.address,"Please give a little more detail about where we should deliver.","Delivery address");
 }
 if(v("time")==="exact"&&!v("clock"))add(f.elements.clock,"Please choose the time you want your order.","Time");
 if(v("payment").startsWith("M-Pesa")&&!$("pay-panel").hidden){
  const known=pickup||typeof DELIVERY_FEES[v("zone")]==="number";
  if(known){const c=v("mpesaCode");if(!c)add(f.elements.mpesaCode,"Please enter the 10-character M-Pesa code from your payment SMS.","M-Pesa code");else if(!/^[A-Za-z0-9]{10}$/.test(c))add(f.elements.mpesaCode,"The M-Pesa code must be exactly 10 letters/numbers (you entered "+c.length+").","M-Pesa code")}
 }
 if(!$("agree").checked)add($("agree"),"Please tick the box to agree to the Terms of Service and Privacy Policy before sending your order.","Agree to Terms & Privacy");
 return errs}
function runValidation(){
 clearErrors();const errs=validateCheckout();if(!errs.length)return true;
 errs.forEach(e=>markErr(e.el,e.msg));
 const s=$("form-errors");s.innerHTML="<b>Please fix "+(errs.length===1?"this before sending:":errs.length+" things before sending:")+"</b><ul>"+errs.map((e,i)=>`<li><button type="button" data-i="${i}">${e.label} — ${e.msg}</button></li>`).join("")+"</ul>";s.hidden=false;
 s.onclick=ev=>{const b=ev.target.closest("button[data-i]");if(!b)return;const el=errs[+b.dataset.i].el;el.scrollIntoView({block:"center",behavior:"smooth"});(el.focus&&el.id!=="pin-box"?el:$("pin-gps")).focus({preventScroll:true})};
 s.scrollIntoView({block:"start",behavior:"smooth"});s.focus({preventScroll:true});return false}
/* clear a field's message as soon as the customer fixes it */
$("checkout-form").addEventListener("input",e=>{const el=e.target;const m=document.getElementById("err-"+(el.id||el.name));if(m){m.remove();el.classList.remove("invalid");el.removeAttribute("aria-invalid");if(el.id==="agree")$("agree-label").classList.remove("invalid")}});
$("checkout-form").addEventListener("change",e=>{const el=e.target;const m=document.getElementById("err-"+(el.id||el.name));if(m){m.remove();el.classList.remove("invalid");el.removeAttribute("aria-invalid");if(el.id==="agree")$("agree-label").classList.remove("invalid")}});
$("go-checkout").addEventListener("click",()=>{$("agree").checked=false;clearErrors()});
const legalM=$("legal-modal");
function openLegal(which){which=which==="privacy"?"privacy":"terms";$("legal-title").textContent=which==="privacy"?"Privacy Policy":"Terms of Service";["terms","privacy"].forEach(k=>{$("legal-"+k).hidden=k!==which;$("tab-"+k).setAttribute("aria-selected",String(k===which));$("tab-"+k).classList.toggle("on",k===which)});legalM.hidden=false;legalM.querySelector(".legal-modal").scrollTop=0;$("legal-close").focus()}
const closeLegal=()=>{legalM.hidden=true};
document.addEventListener("click",e=>{const b=e.target.closest("[data-legal]");if(!b)return;e.preventDefault();e.stopPropagation();const sh=$("m-sheet");if(sh)sh.hidden=true;openLegal(b.dataset.legal)},true);
$("legal-close").addEventListener("click",closeLegal);legalM.addEventListener("click",e=>{if(e.target===legalM)closeLegal()});
addEventListener("keydown",e=>{if(e.key==="Escape"&&!legalM.hidden)closeLegal()});
$("checkout-form").addEventListener("submit",e=>{
 e.preventDefault();if(!cart.size){toast("Add items before checkout");return}if(!runValidation())return;
 const form=new FormData(e.currentTarget);const name=String(form.get("customerName")||"").trim();const phone=String(form.get("phone")||"").trim();const type=form.get("orderType");const address=String(form.get("address")||"").trim();const payment=form.get("payment");const timeMode=form.get("time");let time="As soon as possible";
if(timeMode==="exact"){const clock=String(form.get("clock")||""),dv=Number(form.get("date")||0);if(!clock){toast("Please choose the time you want your order.");$("time-clock").focus();return}
const when=new Date();when.setDate(when.getDate()+dv);const[hh,mm]=clock.split(":").map(Number);when.setHours(hh,mm,0,0);
if(when.getTime()<Date.now()+MIN_LEAD_MINUTES*60000){toast(`Please choose a time at least ${MIN_LEAD_MINUTES} minutes from now.`);$("time-clock").focus();return}
time=`${dayLabel(dv)} at ${fmtTime(hh,mm)}`}const notes=String(form.get("notes")||"").trim();const zone=String(form.get("zone")||"");const zfee=DELIVERY_FEES[zone];const code=String(form.get("mpesaCode")||"").trim().toUpperCase();const isMp=String(payment).startsWith("M-Pesa");const lat=String(form.get("lat")||""),lng=String(form.get("lng")||"");
 const lines=[`Hello Buxton Bites! I'd like to place an order.`,``,`*CUSTOMER DETAILS*`,`Name: ${name}`,`Phone: ${phone}`,`Order type: ${type}`];if(type!=="Pickup"&&zone)lines.push(`Delivery zone: ${zone}`);if(type!=="Pickup"&&lat)lines.push(`📍 Location (Google Maps): ${BBMapPicker.gmapsLink(lat,lng)}`,`🗺 OpenStreetMap: ${BBMapPicker.osmLink(lat,lng)}`);if(address)lines.push(`${type==="Pickup"?"Pickup note":"Delivery address"}: ${address}`);
 lines.push(`${type==="Pickup"?"Pickup":"Delivery"} time: ${time}`,``,`*MY ORDER*`);cart.forEach((qty,id)=>{const p=products.find(x=>x.id===id);lines.push(`• ${p.name} x${qty} — ${money(p.price*qty)}`)});lines.push(``,`*Food subtotal: ${money(subtotal())}*`,...(type!=="Pickup"&&typeof zfee==="number"?[`Delivery fee: ${money(zfee)}`,`*Estimated total: ${money(subtotal()+zfee)}*`]:[]),`Payment method: ${payment}`,...(isMp?[code?`*M-Pesa code: ${code}*`:`M-Pesa code: (to follow — delivery fee to be confirmed)`,`⚠ Please verify this code against the Till before preparing/delivering.`]:[]));if(notes)lines.push(`Order notes: ${notes}`);lines.push(``,`Please confirm availability and final total. Thank you!`);
 if($("remember").checked)CustomerDB.set({name,phone,orderType:type,zone,address,payment,lat,lng,addrAuto:$("address").dataset.auto==="1"});else CustomerDB.clear();
 const url=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;window.open(url,"_blank","noopener,noreferrer");$("checkout-modal").hidden=true;document.body.classList.remove("no-scroll");
});
$("year").textContent=new Date().getFullYear();
try{const saved=JSON.parse(sessionStorage.getItem("bb-cart-restore")||"null");if(saved){saved.forEach(([id,q])=>{if(products.some(p=>p.id===id))cart.set(id,q)});sessionStorage.removeItem("bb-cart-restore")}}catch{}
renderProducts();renderCart();
(function(){const wrap=$("hero-image"),dots=$("hero-dots");let cur=0,timer;
wrap.innerHTML=HERO_SLIDES.map((s,i)=>`<div class="hero-slide${i?"":" active"}" style="background-image:url('${s.img}')"></div>`).join("");
dots.innerHTML=HERO_SLIDES.map((s,i)=>`<button role="tab" aria-label="Slide ${i+1}" class="${i?"":"active"}"></button>`).join("");
const sl=[...wrap.children],dt=[...dots.children],txt=$("hero-text");
function show(n){cur=(n+HERO_SLIDES.length)%HERO_SLIDES.length;const s=HERO_SLIDES[cur],p=products.find(x=>x.id===s.id);
sl.forEach((e,i)=>e.classList.toggle("active",i===cur));dt.forEach((e,i)=>e.classList.toggle("active",i===cur));
txt.classList.add("swap");setTimeout(()=>{$("hero-eyebrow").innerHTML="<span></span> "+s.eyebrow;$("hero-title").innerHTML=s.title;$("hero-desc").textContent=s.text;txt.classList.remove("swap")},220);
$("chip-name").textContent=p?p.name:"";$("chip-price").textContent=p?money(p.price):"";$("chip-add").dataset.add=s.id;$("hero-chip").firstElementChild.innerHTML=ico(s.emoji)}
function play(){stop();if(!matchMedia("(prefers-reduced-motion: reduce)").matches)timer=setInterval(()=>show(cur+1),5500)}
function stop(){clearInterval(timer)}
$("hero-prev").onclick=()=>{show(cur-1);play()};$("hero-next").onclick=()=>{show(cur+1);play()};
dt.forEach((d,i)=>d.onclick=()=>{show(i);play()});
const hero=document.querySelector(".hero");hero.addEventListener("mouseenter",stop);hero.addEventListener("mouseleave",play);hero.addEventListener("focusin",stop);hero.addEventListener("focusout",play);
let sx=null;hero.addEventListener("touchstart",e=>{sx=e.touches[0].clientX},{passive:true});hero.addEventListener("touchend",e=>{if(sx===null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>45){show(cur+(dx<0?1:-1));play()}sx=null});
$("chip-name").textContent=products.find(x=>x.id===HERO_SLIDES[0].id)?.name||"";$("chip-price").textContent=money((products.find(x=>x.id===HERO_SLIDES[0].id)||{price:0}).price);play()})();

document.querySelectorAll(".benefits,.promo,.how-section,.delivery-section,.payment-section,.menu-section .section-heading").forEach(el=>el.classList.add("reveal"));
if("IntersectionObserver"in window){const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.12});document.querySelectorAll(".reveal").forEach(el=>io.observe(el))}else document.querySelectorAll(".reveal").forEach(el=>el.classList.add("in"));

/* ===== Mobile app UI ===== */
(function(){
const hr=new Date().getHours();$("m-greet").textContent=(hr<12?"Good morning!":hr<17?"Good afternoon!":"Good evening!");
const arrow='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
// banner
const sl=$("m-slides"),dots=$("m-dots");
sl.innerHTML=HERO_SLIDES.map((s,i)=>`<div class="m-slide${i?"":" active"}"><div class="m-slide-img" style="background-image:url('${s.img}')"></div><div class="m-slide-body"><span class="m-tag">${s.eyebrow}</span><h2>${s.title}</h2><p>${s.text}</p><button class="m-btn m-order-now" data-add="${s.id}">Order Now <span>${arrow}</span></button></div></div>`).join("");
dots.innerHTML=HERO_SLIDES.map((s,i)=>`<button aria-label="Slide ${i+1}" class="${i?"":"active"}"></button>`).join("");
const slides=[...sl.children],dt=[...dots.children];let cur=0,timer;
function go(n){cur=(n+slides.length)%slides.length;slides.forEach((e,i)=>e.classList.toggle("active",i===cur));dt.forEach((e,i)=>e.classList.toggle("active",i===cur))}
function play(){clearInterval(timer);if(!matchMedia("(prefers-reduced-motion: reduce)").matches)timer=setInterval(()=>go(cur+1),5000)}
dt.forEach((d,i)=>d.onclick=()=>{go(i);play()});
const ban=$("m-banner");let sx=null;ban.addEventListener("touchstart",e=>{sx=e.touches[0].clientX},{passive:true});ban.addEventListener("touchend",e=>{if(sx===null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>40){go(cur+(dx<0?1:-1));play()}sx=null});
sl.addEventListener("click",e=>{if(e.target.closest(".m-order-now"))$("open-cart").click()});
play();
// popular
let favs=[];try{favs=JSON.parse(localStorage.getItem("bb-favs")||"[]")}catch{}
const pop=[["pilau","Signature"],["beef-biriani","Hearty"],["mahamri","Coastal"],["mutton-mandhi","Special"]];
$("m-popular").innerHTML=pop.map(([id,tag],i)=>{const p=products.find(x=>x.id===id);if(!p)return"";return `<article class="m-card"><span class="m-badge b${i%3}">${tag}</span><button class="m-heart${favs.includes(id)?" on":""}" data-fav="${id}" aria-label="Favourite ${p.name}">${ico("heart")}</button><img src="${p.image}" alt="${p.name}" loading="lazy"><h3>${p.name}</h3><p>${p.description}</p><div class="m-card-foot"><b>${money(p.price)}</b><button class="m-plus" data-add="${id}" aria-label="Add ${p.name}">+</button></div></article>`}).join("");
$("m-popular").addEventListener("click",e=>{const f=e.target.closest("[data-fav]");if(!f)return;f.classList.toggle("on");const id=f.dataset.fav;favs=f.classList.contains("on")?[...new Set([...favs,id])]:favs.filter(x=>x!==id);try{localStorage.setItem("bb-favs",JSON.stringify(favs))}catch{}});
// header actions
$("m-cart-btn").onclick=()=>$("open-cart").click();$("m-nav-order").onclick=()=>$("open-cart").click();
const toMenu=()=>goView("menu");
$("m-filter").onclick=toMenu;
$("m-cats").addEventListener("click",e=>{if(e.target.closest("[data-category]"))setTimeout(toMenu,80)});
let ms;$("m-search").addEventListener("input",e=>{if(isPhone())return;$("search").value=e.target.value;renderProducts();clearTimeout(ms);if(e.target.value.trim())ms=setTimeout(()=>$("menu").scrollIntoView({behavior:"smooth"}),500)});
$("m-search").addEventListener("focus",e=>{goView("menu");setTimeout(()=>{$("search").focus()},30);e.target.blur()});
// sheet
const sh=$("m-sheet");const open=v=>{sh.hidden=!v};$("m-menu-btn").onclick=()=>open(true);$("m-sheet-bg").onclick=()=>open(false);sh.addEventListener("click",e=>{if(e.target.closest("a"))open(false)});

})();

(function(){const sel=$("time-date"),clock=$("time-clock"),mode=$("time-mode"),pick=$("time-pick"),hint=$("time-hint");
sel.innerHTML=[0,1,2,3,4,5,6].map(n=>`<option value="${n}">${dayLabel(n)}</option>`).join("");
function sync(){const ex=mode.value==="exact";pick.hidden=!ex;clock.required=ex;
 if(ex){const today=sel.value==="0";if(today){const t=new Date(Date.now()+MIN_LEAD_MINUTES*60000);const mn=String(t.getHours()).padStart(2,"0")+":"+String(t.getMinutes()).padStart(2,"0");clock.min=mn;hint.textContent=`Same-day orders need at least ${MIN_LEAD_MINUTES} minutes (earliest ${fmtTime(t.getHours(),t.getMinutes())}). We'll confirm the time on WhatsApp.`}else{clock.removeAttribute("min");hint.textContent="We'll confirm your time on WhatsApp. Special meals need advance notice."}}}
mode.addEventListener("change",sync);sel.addEventListener("change",sync);
$("order-type").addEventListener("change",e=>{$("time-label").textContent=e.target.value==="Pickup"?"Pickup time":"Delivery time"});sync()})();

/* ===== IndexedDB: remember customer details on this device ===== */
const CustomerDB=(()=>{const NAME="buxton-bites",STORE="customer";let dbp;
function open(){if(dbp)return dbp;dbp=new Promise((res,rej)=>{if(!("indexedDB"in window))return rej(new Error("no idb"));const r=indexedDB.open(NAME,1);r.onupgradeneeded=()=>r.result.createObjectStore(STORE);r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)});return dbp}
async function tx(mode,fn){try{const db=await open();return await new Promise((res,rej)=>{const t=db.transaction(STORE,mode),req=fn(t.objectStore(STORE));t.oncomplete=()=>res(req&&req.result);t.onerror=()=>rej(t.error);t.onabort=()=>rej(t.error)})}catch(e){return null}}
return{get:()=>tx("readonly",s=>s.get("profile")),set:v=>tx("readwrite",s=>s.put({...v,savedAt:Date.now()},"profile")),clear:()=>tx("readwrite",s=>s.delete("profile"))}})();
async function fillSaved(){const p=await CustomerDB.get();if(!p||!p.name)return;
 const f=$("checkout-form"),set=(n,v)=>{const el=f.elements[n];if(el&&v&&!String(el.value).trim())el.value=v};
 set("customerName",p.name);set("phone",p.phone);set("address",p.address);if(p.addrAuto&&f.elements.address.value===p.address)f.elements.address.dataset.auto="1";
 if(p.orderType&&f.elements.orderType.value!==p.orderType){f.elements.orderType.value=p.orderType;f.elements.orderType.dispatchEvent(new Event("change"))}
 if(p.zone&&!f.elements.zone.value&&[...f.elements.zone.options].some(o=>o.value===p.zone))f.elements.zone.value=p.zone;
 if(p.payment&&[...f.elements.payment.options].some(o=>o.value===p.payment||o.text===p.payment))f.elements.payment.value=p.payment;
 f.elements.zone.dispatchEvent(new Event("change"));
 if(p.lat&&!p.addrAuto&&$("pin-lat")&&!$("pin-lat").value)setPin(p.lat,p.lng,"Saved location — tap Update my location to refresh","saved");
 $("saved-name").textContent=p.name.split(" ")[0];$("saved-note").hidden=false;$("remember").checked=true}
CustomerDB.get().then(p=>{if(p&&p.name){const g=$("m-greet");if(g)g.textContent=g.textContent.replace("!",", "+p.name.split(" ")[0]+"!")}});
$("clear-saved").addEventListener("click",async()=>{await CustomerDB.clear();const f=$("checkout-form");["customerName","phone","address"].forEach(n=>f.elements[n].value="");f.elements.zone.value="";f.elements.zone.dispatchEvent(new Event("change"));setPin(null);$("saved-note").hidden=true;toast("Saved details cleared from this device")});

/* ===== Phone splash screen ===== */
(function(){const s=$("splash");if(!s)return;let done=false;
function hide(){if(done)return;done=true;try{sessionStorage.setItem("bb-splash","1")}catch{}s.classList.add("out");document.documentElement.classList.remove("splash-on");setTimeout(()=>s.remove(),600)}
setTimeout(hide,2600);s.addEventListener("click",hide)})();

/* ===== Mobile app router (phones): Home / Menu / Delivery / Payments / How to order ===== */
const VIEW_TITLES={menu:"Our Menu",delivery:"Delivery zones",payments:"Payments",how:"How to order"};
const HASH_VIEW={"#menu":"menu","#delivery":"delivery","#payments":"payments","#how-it-works":"how","#top":"home"};
const isPhone=()=>matchMedia("(max-width:700px)").matches;
function showView(v){if(!["home","menu","delivery","payments","how"].includes(v))v="home";document.body.dataset.view=v;
 if(VIEW_TITLES[v])$("m-pagetitle").textContent=VIEW_TITLES[v];
 document.querySelectorAll("[data-spy]").forEach(x=>x.classList.toggle("active",x.dataset.spy===(v==="home"?"top":v)));
 window.scrollTo(0,0)}
function goView(v){if(!isPhone())return;if(location.hash==="#page-"+v)showView(v);else location.hash="page-"+v}
addEventListener("hashchange",()=>{if(!isPhone())return;showView((location.hash.match(/^#page-(\w+)/)||[])[1]||"home")});
document.addEventListener("click",e=>{const a=e.target.closest('a[href^="#"]');if(!a||!isPhone())return;const v=HASH_VIEW[a.getAttribute("href")];if(!v)return;e.preventDefault();goView(v)});
$("m-back").onclick=()=>goView("home");$("m-pagecart").onclick=()=>$("open-cart").click();
if(isPhone())showView((location.hash.match(/^#page-(\w+)/)||[])[1]||"home");

/* ===== PWA: service worker + install prompts ===== */
(function(){
if("serviceWorker"in navigator&&(location.protocol==="https:"||location.hostname==="localhost"||location.hostname==="127.0.0.1")){
 const bar=$("update-bar");let waiting=null,reloading=false;
 function offerUpdate(w){waiting=w;bar.hidden=false}
 $("update-later").addEventListener("click",()=>{bar.hidden=true});
 $("update-reload").addEventListener("click",()=>{
  try{sessionStorage.setItem("bb-cart-restore",JSON.stringify([...cart]))}catch{}
  $("update-reload").textContent="Updating…";
  if(waiting)waiting.postMessage({type:"skipWaiting"});else location.reload();
  setTimeout(()=>location.reload(),4000)});
 navigator.serviceWorker.addEventListener("controllerchange",()=>{if(reloading)return;if(!window.__hadController)return;reloading=true;location.reload()});
 addEventListener("load",()=>{
  window.__hadController=!!navigator.serviceWorker.controller;
  navigator.serviceWorker.register("sw.js",{updateViaCache:"none"}).then(reg=>{
   const urls=[...new Set(products.map(p=>p.image).concat(HERO_SLIDES.map(s=>s.img)))];
   const send=()=>{const w=reg.active||navigator.serviceWorker.controller;if(w)w.postMessage({type:"precache",urls})};
   setTimeout(()=>navigator.serviceWorker.ready.then(send),3000);
   if(reg.waiting&&navigator.serviceWorker.controller)offerUpdate(reg.waiting);
   reg.addEventListener("updatefound",()=>{const n=reg.installing;n&&n.addEventListener("statechange",()=>{if(n.state==="installed"&&navigator.serviceWorker.controller)offerUpdate(n)})});
   const check=()=>reg.update().catch(()=>{});
   setInterval(check,30*60*1000);
   document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible")check()});
   addEventListener("online",check);
  }).catch(()=>{})});
}
const standalone=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===true;
if(standalone()){document.documentElement.classList.add("is-app");return}
const ua=navigator.userAgent,isIOS=/iphone|ipad|ipod/i.test(ua)||(navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1);
const iosSafari=isIOS&&/safari/i.test(ua)&&!/crios|fxios|edgios|opios/i.test(ua);
let deferred=null;const banner=$("install-banner"),sheetItem=$("sheet-install");
const key="bb-install-dismissed";
const dismissed=()=>{try{const t=+localStorage.getItem(key);return t&&Date.now()-t<7*864e5}catch{return false}};
function showBanner(){if(dismissed()||standalone()||!isPhone())return;banner.hidden=false}
function hideBanner(remember){banner.hidden=true;if(remember){try{localStorage.setItem(key,String(Date.now()))}catch{}}}
async function install(){
 if(deferred){deferred.prompt();const r=await deferred.userChoice.catch(()=>({}));deferred=null;hideBanner(r.outcome!=="accepted");sheetItem.hidden=true;return}
 if(isIOS){$("ios-note").hidden=iosSafari;$("ios-help").hidden=false;hideBanner(false);return}
 toast("Open your browser menu and choose “Install app” or “Add to Home screen”.");
}
addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferred=e;sheetItem.hidden=false;setTimeout(showBanner,4000)});
addEventListener("appinstalled",()=>{deferred=null;hideBanner(false);sheetItem.hidden=true;toast("Buxton Bites installed")});
if(isIOS){sheetItem.hidden=false;setTimeout(showBanner,5000)}
$("install-btn").addEventListener("click",install);
$("install-close").addEventListener("click",()=>hideBanner(true));
sheetItem.addEventListener("click",e=>{e.preventDefault();e.stopPropagation();$("m-sheet").hidden=true;install()});
const closeIos=()=>{$("ios-help").hidden=true};$("ios-ok").addEventListener("click",closeIos);$("ios-bg").addEventListener("click",closeIos);
})();

/* ===== OpenStreetMap pin + automatic location detection ===== */
/* Approximate centre (lat,lng) of each delivery area. Used to match the customer's GPS position to the nearest zone. Edit freely. */
const ZONE_COORDS={
"Old Town":[-4.0626,39.6773],"Ganjoni":[-4.0700,39.6700],"Tudor":[-4.0490,39.6610],"Kizingo":[-4.0690,39.6540],"Buxton":[-4.0475,39.6745],"Makupa":[-4.0420,39.6450],"Tononoka":[-4.0560,39.6710],"Mbaraki":[-4.0650,39.6580],
"Nyali":[-4.0230,39.7110],"Mkomani":[-4.0310,39.7000],"Kongowea":[-4.0270,39.6850],"Kisauni":[-3.9950,39.7120],"Bamburi":[-3.9830,39.7230],"Shanzu":[-3.9560,39.7380],"Mtwapa":[-3.9410,39.7450],
"Changamwe":[-4.0200,39.6200],"Port Reitz / Airport":[-4.0330,39.5950],"Miritini":[-3.9960,39.5750],"Jomvu":[-3.9890,39.6130],"Mikindani":[-4.0000,39.6330],"Chaani":[-4.0210,39.6350],
"Likoni":[-4.0900,39.6600],"Mtongwe":[-4.0970,39.6330],"Shelly Beach":[-4.1170,39.6540]
};
const ZONE_MAX_KM=12;          // nearest zone centre must be within this distance to auto-select it
const SERVICE_BOX={s:-4.20,n:-3.88,w:39.50,e:39.80}; // rough Mombasa service area; outside this we don't pin or pick a zone
const PIN_MAX_ACCURACY_M=1500; // GPS fixes worse than this are too vague to send to the rider as a pin
const kmBetween=(a,b,c,d)=>{const r=Math.PI/180,x=Math.sin((c-a)*r/2)**2+Math.cos(a*r)*Math.cos(c*r)*Math.sin((d-b)*r/2)**2;return 12742*Math.asin(Math.sqrt(x))};
function nearestZone(lat,lng){let best=null,bd=1e9;for(const z in ZONE_COORDS){const d=kmBetween(lat,lng,ZONE_COORDS[z][0],ZONE_COORDS[z][1]);if(d<bd){bd=d;best=z}}return{zone:best,km:bd}}

/* Auto-fill rules: detection only ever writes into a field that is empty or was itself filled by detection (data-auto="1").
   As soon as the customer types in / picks a value themselves, the flag is removed and detection leaves that field alone. */
const autoOk=el=>!String(el.value).trim()||el.dataset.auto==="1";
["zone","address"].forEach(id=>{const el=$(id);const clear=e=>{if(e.isTrusted)delete el.dataset.auto};el.addEventListener(id==="zone"?"change":"input",clear)});

function setPin(lat,lng,label,src){
 const box=$("pin-box");if(!box||!$("pin-lat"))return;$("pin-lat").value=lat?String(lat):"";$("pin-lng").value=lng?String(lng):"";
 box.classList.remove("busy","warn");
 if(lat){box.dataset.src=src||"manual";$("pin-title").textContent="Location pinned";$("pin-sub").textContent=label||(+lat).toFixed(5)+", "+(+lng).toFixed(5);$("pin-gps").lastChild.textContent=" Update my location";box.classList.add("done")}
 else{delete box.dataset.src;$("pin-title").textContent="Share your location";$("pin-sub").textContent="Optional — we attach a map link so our rider finds you fast.";$("pin-gps").lastChild.textContent=" Use my current location";box.classList.remove("done")}
}
function pinNote(text,cls){const box=$("pin-box");box.classList.remove("busy","warn");if(cls)box.classList.add(cls);$("pin-sub").textContent=text}

let locGen=0,locBusy=false,locAuto=false; // locGen invalidates in-flight detections when the customer pins manually
function applyZone(zone,gen){
 const sel=$("zone");if(!zone||!autoOk(sel)||!sel.dataset)return false;
 if(![...sel.options].some(o=>o.value===zone))return false;
 if(sel.value!==zone){sel.value=zone;sel.dataset.auto="1";sel.dispatchEvent(new Event("change"))}return true}
function applyAddress(text){const el=$("address");if(!text||!autoOk(el))return;if(el.value!==text){el.value=text;el.dataset.auto="1"}}

function detectLocation(opts){
 opts=opts||{};const manualClick=!!opts.manual,box=$("pin-box");
 if(!box||$("order-type").value==="Pickup"||locBusy)return;
 if(!manualClick&&(locAuto||($("pin-lat").value&&!autoOk($("address")))))return; // automatic attempts: once per checkout, never over an existing pin
 locAuto=true;
 if(!navigator.geolocation){if(manualClick)pinNote("This device can't share its location. Please type your street/address below.","warn");return}
 const gen=++locGen;locBusy=true;pinNote("Finding your location…","busy");$("pin-gps").disabled=true;
 const finish=()=>{locBusy=false;$("pin-gps").disabled=false};
 navigator.geolocation.getCurrentPosition(async p=>{
  const lat=p.coords.latitude,lng=p.coords.longitude,acc=p.coords.accuracy||0;
  if(gen!==locGen){finish();return}
  if(lat<SERVICE_BOX.s||lat>SERVICE_BOX.n||lng<SERVICE_BOX.w||lng>SERVICE_BOX.e){finish();setPin(null);pinNote("You seem to be outside our Mombasa delivery area. Pick your area below or message us on WhatsApp.","warn");return}
  const nz=nearestZone(lat,lng),zone=nz.km<=ZONE_MAX_KM?nz.zone:null;
  const preciseEnough=acc<=PIN_MAX_ACCURACY_M;
  /* explicit button press may replace any earlier pin; automatic detection never overrides a saved/manual one (checked above) */
  let rev=null;const addrEl=$("address"),oldPh=addrEl.placeholder,looking=preciseEnough&&autoOk(addrEl);if(looking)addrEl.placeholder="Finding your street…";if(preciseEnough&&navigator.onLine&&window.BBMapPicker)rev=await BBMapPicker.reverse(lat.toFixed(6),lng.toFixed(6));addrEl.placeholder=oldPh;
  if(gen!==locGen){finish();return}
  finish();
  if(zone)applyZone(zone);
  if(preciseEnough){
   applyAddress((rev&&rev.short)||(zone?"Near "+zone:""));
   setPin(+lat.toFixed(6),+lng.toFixed(6),rev&&rev.short?rev.short:"Location detected, but we couldn’t find the street name — please type your street/address below.","auto");
   toast("Location detected")
  }else{
   setPin(null);pinNote("Your location is only approximate"+(zone?" ("+zone+" selected)":"")+". Please type your street/address below.","warn")
  }
 },err=>{
  if(gen!==locGen){finish();return}
  finish();setPin(null);
  pinNote(err&&err.code===1?"Location access is off. You can still type your address below.":"Couldn't get your location. Please type your street/address below.","warn")
 },{enableHighAccuracy:true,timeout:12000,maximumAge:60000});
}
/* Automatic trigger: only when permission isn't blocked, and never prompts again once it has been refused. */
async function autoDetect(){
 if($("order-type").value==="Pickup"||locAuto||($("pin-lat").value&&!autoOk($("address"))))return;
 try{if(navigator.permissions){const s=await navigator.permissions.query({name:"geolocation"});if(s.state==="denied"){locAuto=true;pinNote("Location access is off. You can still type your address below.","warn");return}}}catch(_){}
 detectLocation();
}

$("pin-gps").addEventListener("click",()=>detectLocation({manual:true}));
$("order-type").addEventListener("change",()=>{const pickup=$("order-type").value==="Pickup";if($("pin-box"))$("pin-box").hidden=pickup;if(!pickup)autoDetect()});
/* Checkout opens → saved details fill first, then detection runs only if no saved pin exists */
$("go-checkout").addEventListener("click",async()=>{locAuto=false;try{await fillSaved()}catch(_){}autoDetect()});
$("clear-saved").addEventListener("click",()=>{locGen++;locBusy=false;locAuto=false;["zone","address"].forEach(id=>delete $(id).dataset.auto);autoDetect()});
