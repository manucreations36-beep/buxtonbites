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
const cart = new Map();
let activeCategory = "All";
const $ = id => document.getElementById(id);
const grid = $("product-grid");
$("zone").innerHTML='<option value="">Select your area</option>'+DELIVERY_ZONES.map(g=>`<optgroup label="${g.group}">${g.areas.map(x=>`<option value="${x}">${x} — ${money(DELIVERY_FEES[x])}</option>`).join("")}</optgroup>`).join("")+'<option>Other area in Mombasa — confirm on WhatsApp</option>';
$("zone-grid").innerHTML=DELIVERY_ZONES.map(g=>`<div class="zone-card"><h3>${g.group}</h3><div class="zone-chips">${g.areas.map(x=>`<span>${x}<b>${money(DELIVERY_FEES[x])}</b></span>`).join("")}</div></div>`).join("");
function updateDelivery(){const pickup=$("order-type").value==="Pickup",z=$("zone").value,fee=DELIVERY_FEES[z];let txt="Confirmed on WhatsApp";if(pickup)txt="None (pickup)";else if(typeof fee==="number")txt=money(fee);$("checkout-delivery").textContent=txt;const known=!pickup&&typeof fee==="number";$("total-row").hidden=!known;if(known)$("checkout-total").textContent=money(subtotal()+fee)}
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
  const count=totalQty();$("cart-count").textContent=count;$("drawer-count").textContent=`(${count})`;
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
$("zone").addEventListener("change",updateDelivery);
$("copy-till").addEventListener("click",async()=>{try{await navigator.clipboard.writeText("1817896");toast("Till number copied: 1817896")}catch{toast("M-Pesa Till Number: 1817896")}});
$("checkout-form").addEventListener("submit",e=>{
 e.preventDefault();if(!cart.size){toast("Add items before checkout");return}
 const form=new FormData(e.currentTarget);const name=String(form.get("customerName")||"").trim();const phone=String(form.get("phone")||"").trim();const type=form.get("orderType");const address=String(form.get("address")||"").trim();const payment=form.get("payment");const time=form.get("time");const notes=String(form.get("notes")||"").trim();const zone=String(form.get("zone")||"");const zfee=DELIVERY_FEES[zone];
 const lines=[`Hello Buxton Bites! I'd like to place an order.`,``,`*CUSTOMER DETAILS*`,`Name: ${name}`,`Phone: ${phone}`,`Order type: ${type}`];if(type!=="Pickup"&&zone)lines.push(`Delivery zone: ${zone}`);if(address)lines.push(`${type==="Pickup"?"Pickup note":"Delivery address"}: ${address}`);
 lines.push(`Preferred time: ${time}`,``,`*MY ORDER*`);cart.forEach((qty,id)=>{const p=products.find(x=>x.id===id);lines.push(`• ${p.name} x${qty} — ${money(p.price*qty)}`)});lines.push(``,`*Food subtotal: ${money(subtotal())}*`,...(type!=="Pickup"&&typeof zfee==="number"?[`Delivery fee: ${money(zfee)}`,`*Estimated total: ${money(subtotal()+zfee)}*`]:[]),`Payment method: ${payment}`,`M-Pesa Till: 1817896`);if(notes)lines.push(`Order notes: ${notes}`);lines.push(``,`Please confirm item availability, delivery fee (if applicable), and final total. Thank you!`);
 const url=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;window.open(url,"_blank","noopener,noreferrer");$("checkout-modal").hidden=true;document.body.classList.remove("no-scroll");
});
$("year").textContent=new Date().getFullYear();
renderProducts();renderCart();
document.querySelectorAll(".benefits,.promo,.how-section,.delivery-section,.payment-section,.menu-section .section-heading").forEach(el=>el.classList.add("reveal"));
if("IntersectionObserver"in window){const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.12});document.querySelectorAll(".reveal").forEach(el=>io.observe(el))}else document.querySelectorAll(".reveal").forEach(el=>el.classList.add("in"));