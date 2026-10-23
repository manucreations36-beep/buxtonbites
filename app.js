const WHATSAPP_NUMBER = "254791511386";
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
{id:"black-masala-single",name:"Black masala tea, single",price:100,category:"Hot Drinks",image:"assets/hot-drinks/black-masala-tea.jpg",description:"Bold black tea with warming masala."},
{id:"black-masala-teapot",name:"Black masala tea, teapot",price:350,category:"Hot Drinks",image:"assets/hot-drinks/black-masala-tea.jpg",description:"Masala tea served by the teapot."},
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
const DELIVERY_FEES={
"Old Town":150,"Ganjoni":150,"Tudor":150,"Kizingo":150,"Buxton":100,"Makupa":150,"Tononoka":150,"Mbaraki":150,
"Nyali":250,"Mkomani":250,"Kongowea":250,"Kisauni":300,"Bamburi":300,"Shanzu":400,"Mtwapa":450,
"Changamwe":300,"Port Reitz / Airport":350,"Miritini":400,"Jomvu":350,"Mikindani":350,"Chaani":350,
"Likoni":300,"Mtongwe":350,"Shelly Beach":400
};

const HERO_SLIDES=[
{id:"pilau",eyebrow:"MADE WITH LOVE IN MOMBASA",title:"Big flavour.<br><em>Buxton style.</em>",text:"From coastal breakfast bites to comforting biriani and signature pilau — your next favourite meal is just a WhatsApp message away.",img:"assets/lunch-dinner/signature-pilau.jpg",emoji:"🌶️"},
{id:"mahamri",eyebrow:"COASTAL BREAKFAST",title:"Start the day<br><em>the Swahili way.</em>",text:"Soft, fragrant mahamri, mbahazi and warm bites to kick off your morning.",img:"assets/breakfast/mahamri.jpg",emoji:"🥐"},
{id:"mutton-mandhi",eyebrow:"LUNCH & DINNER",title:"Rich, aromatic<br><em>mandhi.</em>",text:"Hearty mains, biriani and coconut dishes — made for a proper sit-down meal.",img:"assets/lunch-dinner/mutton-mandhi.jpg",emoji:"🍖"},
{id:"dawa",eyebrow:"HOT DRINKS",title:"Warm up with<br><em>special dawa.</em>",text:"Spiced teas, milk tea and Arabic coffee to keep you cosy, any time of day.",img:"assets/hot-drinks/special-dawa.jpg",emoji:"☕"},
{id:"mango",eyebrow:"FRESH & COOL",title:"Cool down,<br><em>coastal style.</em>",text:"Mango, passion, pineapple and more — chilled juices and sodas to pair with any meal.",img:"assets/cold-drinks/mango-juice.jpg",emoji:"🥭"}
];
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
  const tab=e.target.closest("[data-category]");if(tab){activeCategory=tab.dataset.category;document.querySelectorAll("[data-category]").forEach(b=>b.classList.toggle("active",b===tab));renderProducts()}
});
$("search").addEventListener("input",renderProducts);
$("open-cart").addEventListener("click",openCart);$("close-cart").addEventListener("click",closeCart);$("overlay").addEventListener("click",closeCart);
$("browse-menu").addEventListener("click",()=>{closeCart();$("menu").scrollIntoView({behavior:"smooth"})});
$("go-checkout").addEventListener("click",()=>{if(!cart.size)return;closeCart();$("checkout-modal").hidden=false;document.body.classList.add("no-scroll")});
$("close-checkout").addEventListener("click",()=>{$("checkout-modal").hidden=true;document.body.classList.remove("no-scroll")});
$("checkout-modal").addEventListener("click",e=>{if(e.target===$("checkout-modal")){$("checkout-modal").hidden=true;document.body.classList.remove("no-scroll")}});
$("order-type").addEventListener("change",e=>{const pickup=e.target.value==="Pickup";$("address-label").firstChild.textContent=pickup?"Pickup note / preferred time":"Delivery location / address";$("address").required=!pickup;$("address").placeholder=pickup?"Optional collection note":"Estate, building, landmark";$("zone-label").hidden=pickup;$("zone").required=!pickup;updateDelivery()});
$("zone").addEventListener("change",updateDelivery);$("payment").addEventListener("change",updateDelivery);$("mpesa-code").addEventListener("input",e=>{e.target.value=e.target.value.toUpperCase().replace(/[^A-Z0-9]/g,"")});$("copy-till-checkout").addEventListener("click",()=>$("copy-till").click());
$("copy-till").addEventListener("click",async()=>{try{await navigator.clipboard.writeText("1817896");toast("Till number copied: 1817896")}catch{toast("M-Pesa Till Number: 1817896")}});
$("checkout-form").addEventListener("submit",e=>{
 e.preventDefault();if(!cart.size){toast("Add items before checkout");return}
 const form=new FormData(e.currentTarget);const name=String(form.get("customerName")||"").trim();const phone=String(form.get("phone")||"").trim();const type=form.get("orderType");const address=String(form.get("address")||"").trim();const payment=form.get("payment");const time=form.get("time");const notes=String(form.get("notes")||"").trim();const zone=String(form.get("zone")||"");const zfee=DELIVERY_FEES[zone];const code=String(form.get("mpesaCode")||"").trim().toUpperCase();const isMp=String(payment).startsWith("M-Pesa");
 const lines=[`Hello Buxton Bites! I'd like to place an order.`,``,`*CUSTOMER DETAILS*`,`Name: ${name}`,`Phone: ${phone}`,`Order type: ${type}`];if(type!=="Pickup"&&zone)lines.push(`Delivery zone: ${zone}`);if(address)lines.push(`${type==="Pickup"?"Pickup note":"Delivery address"}: ${address}`);
 lines.push(`Preferred time: ${time}`,``,`*MY ORDER*`);cart.forEach((qty,id)=>{const p=products.find(x=>x.id===id);lines.push(`• ${p.name} x${qty} — ${money(p.price*qty)}`)});lines.push(``,`*Food subtotal: ${money(subtotal())}*`,...(type!=="Pickup"&&typeof zfee==="number"?[`Delivery fee: ${money(zfee)}`,`*Estimated total: ${money(subtotal()+zfee)}*`]:[]),`Payment method: ${payment}`,...(isMp?[`M-Pesa Till: 1817896`,code?`*M-Pesa code: ${code}*`:`M-Pesa code: (to follow — delivery fee to be confirmed)`,`⚠️ Please verify this code against the Till before preparing/delivering.`]:[]));if(notes)lines.push(`Order notes: ${notes}`);lines.push(``,`Please confirm availability and final total. Thank you!`);
 const url=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;window.open(url,"_blank","noopener,noreferrer");$("checkout-modal").hidden=true;document.body.classList.remove("no-scroll");
});
$("year").textContent=new Date().getFullYear();
renderProducts();renderCart();
(function(){const wrap=$("hero-image"),dots=$("hero-dots");let cur=0,timer;
wrap.innerHTML=HERO_SLIDES.map((s,i)=>`<div class="hero-slide${i?"":" active"}" style="background-image:url('${s.img}')"></div>`).join("");
dots.innerHTML=HERO_SLIDES.map((s,i)=>`<button role="tab" aria-label="Slide ${i+1}" class="${i?"":"active"}"></button>`).join("");
const sl=[...wrap.children],dt=[...dots.children],txt=$("hero-text");
function show(n){cur=(n+HERO_SLIDES.length)%HERO_SLIDES.length;const s=HERO_SLIDES[cur],p=products.find(x=>x.id===s.id);
sl.forEach((e,i)=>e.classList.toggle("active",i===cur));dt.forEach((e,i)=>e.classList.toggle("active",i===cur));
txt.classList.add("swap");setTimeout(()=>{$("hero-eyebrow").innerHTML="<span></span> "+s.eyebrow;$("hero-title").innerHTML=s.title;$("hero-desc").textContent=s.text;txt.classList.remove("swap")},220);
$("chip-name").textContent=p?p.name:"";$("chip-price").textContent=p?money(p.price):"";$("chip-add").dataset.add=s.id;$("hero-chip").firstElementChild.textContent=s.emoji}
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
const hr=new Date().getHours();$("m-greet").textContent=(hr<12?"Good morning!":hr<17?"Good afternoon!":"Good evening!")+" 👋";
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
$("m-popular").innerHTML=pop.map(([id,tag],i)=>{const p=products.find(x=>x.id===id);if(!p)return"";return `<article class="m-card"><span class="m-badge b${i%3}">${tag}</span><button class="m-heart${favs.includes(id)?" on":""}" data-fav="${id}" aria-label="Favourite ${p.name}">♥</button><img src="${p.image}" alt="${p.name}" loading="lazy"><h3>${p.name}</h3><p>${p.description}</p><div class="m-card-foot"><b>${money(p.price)}</b><button class="m-plus" data-add="${id}" aria-label="Add ${p.name}">+</button></div></article>`}).join("");
$("m-popular").addEventListener("click",e=>{const f=e.target.closest("[data-fav]");if(!f)return;f.classList.toggle("on");const id=f.dataset.fav;favs=f.classList.contains("on")?[...new Set([...favs,id])]:favs.filter(x=>x!==id);try{localStorage.setItem("bb-favs",JSON.stringify(favs))}catch{}});
// header actions
$("m-cart-btn").onclick=()=>$("open-cart").click();$("m-nav-order").onclick=()=>$("open-cart").click();
const toMenu=()=>$("menu").scrollIntoView({behavior:"smooth"});
$("m-filter").onclick=toMenu;
$("m-cats").addEventListener("click",e=>{const b=e.target.closest("[data-category]");if(b&&b.dataset.category!=="All")setTimeout(toMenu,60)});
let t;$("m-search").addEventListener("input",e=>{$("search").value=e.target.value;renderProducts();clearTimeout(t);if(e.target.value.trim())t=setTimeout(toMenu,500)});
// sheet
const sh=$("m-sheet");const open=v=>{sh.hidden=!v};$("m-menu-btn").onclick=()=>open(true);$("m-sheet-bg").onclick=()=>open(false);sh.addEventListener("click",e=>{if(e.target.closest("a"))open(false)});
// scroll spy
const spy=[...document.querySelectorAll("[data-spy]")];const tg={top:document.body,menu:$("menu"),delivery:$("delivery")};
function onScroll(){const y=scrollY+window.innerHeight*.4;let k="top";if(y>=tg.menu.offsetTop)k="menu";if(y>=tg.delivery.offsetTop)k="delivery";spy.forEach(x=>x.classList.toggle("active",x.dataset.spy===k))}
addEventListener("scroll",onScroll,{passive:true});onScroll();
})();
