var PHONE="918369412425";
var MENU={sweets:[["Ladoos",[["Rava ladoo",600],["Churma ladoo",800],["Besan ladoo",800,1],["Rava besan ladoo",800],["Moogdal ladoo",800],["Raagi ladoo",850],["Green moong ladoo",850]]],
["Winter &amp; wellness ladoos",[["Methi ladoo",1500],["Dink ladoo",1250],["Dryfruit ladoo",1550]]],
["Mithai",[["Ghee Mysore Pak",1000,1],["Kaju katli",1250,1],["Kesar kaju katli",1350]]],
["Festive favourites",[["Sweet Shankarpali",800],["Rava Karanji",780],["Besan Karanji",800]]]],
snacks:[["Chivda &amp; crunch",[["Shev",500],["Pohe chivda",530],["Maka Chivda",540],["Laxminarayan Chivda",560]]],
["Crispy bites",[["Peri peri shankarpali",520],["Chakli",680]]]]};
var qty={},items=[];
function build(id,groups){var h="";groups.forEach(function(g){h+="<h3>"+g[0]+"</h3>";g[1].forEach(function(it){var k=items.length;items.push(it);qty[k]=0;
h+='<div class="row"><div class="nm">'+it[0]+(it[2]?'<span class="pill">Popular</span>':'')+'</div><div class="pr">₹'+it[1]+'<small>/kg</small></div><div class="st" id="s'+k+'"></div></div>'})});
document.getElementById(id).innerHTML=h}
function draw(k){var e=document.getElementById("s"+k),q=qty[k];
e.innerHTML=q?'<button aria-label="Less" data-k="'+k+'" data-d="-1">−</button><output>'+q+' kg</output><button aria-label="More" data-k="'+k+'" data-d="1">+</button>':'<button class="add" aria-label="Add" data-k="'+k+'" data-d="1">+</button>'}
build("sweets",MENU.sweets);build("snacks",MENU.snacks);items.forEach(function(_,k){draw(k)});
document.addEventListener("click",function(ev){var b=ev.target.closest("button[data-k]");if(!b)return;var k=+b.dataset.k;
qty[k]=Math.max(0,Math.round((qty[k]+0.5*+b.dataset.d)*2)/2);draw(k);upd();var n=document.querySelector('#s'+k+' button:last-child');if(n)n.focus()});
function upd(){var t=0,c=0,L=[];items.forEach(function(it,k){if(qty[k]){c++;t+=qty[k]*it[1];L.push([it[0].replace(/&amp;/g,"&"),qty[k],qty[k]*it[1]])}});
CART={c:c,t:t,L:L};
document.getElementById("cnt").textContent=c?c+(c>1?" items":" item")+" in your order":"No items yet";
document.getElementById("sum").textContent="₹"+t.toLocaleString("en-IN");
document.getElementById("go").textContent=c?"Checkout":"Browse menu"}
var CART={c:0,t:0,L:[]},dlg=document.getElementById("dlg"),wa=function(m){return"https://wa.me/"+PHONE+"?text="+encodeURIComponent(m)};
document.getElementById("go").onclick=function(){if(!CART.c){document.getElementById("sweets").scrollIntoView({behavior:"smooth"});return}
document.getElementById("sum2").innerHTML=CART.L.map(function(x){return"<div><span>"+x[0]+" × "+x[1]+" kg</span><span>₹"+x[2]+"</span></div>"}).join("")+'<div class="tt"><span>Estimated total</span><span>₹'+CART.t.toLocaleString("en-IN")+"</span></div>";
dlg.showModal()};
document.getElementById("cx").onclick=function(){dlg.close()};
dlg.addEventListener("click",function(e){if(e.target===dlg)dlg.close()});
var d=new Date();document.getElementById("dd").min=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
document.getElementById("of").onsubmit=function(e){e.preventDefault();var f=e.target,v=function(n){return f.elements[n].value.trim()||"-"};
var m="*New Order – Taste Tales by Reshma*\n\n*Items*\n"+CART.L.map(function(x){return"• "+x[0]+" – "+x[1]+" kg (₹"+x[2]+")"}).join("\n")+"\n\n*Estimated total:* ₹"+CART.t+" (delivery charges extra)\n\n*Customer details*\nName: "+v("name")+"\nMobile: "+v("mob")+"\nAddress: "+v("a1")+", "+v("a2")+"\nCity: "+v("city")+" – "+v("pin")+"\nState: "+v("state")+"\nLandmark: "+v("lm")+"\nNeeded by: "+v("dt")+"\nNotes: "+v("nt");
var a=document.getElementById("wl");a.href=wa(m);a.style.display="block";a.click()};
var R=[["mr","रवा लाडू आणि चकली अगदी घरच्यासारखी चव! दिवाळीसाठी पुन्हा ऑर्डर करणार.","मराठी"],["mr","करंजी खुसखुशीत आणि सारण भरपूर. घरच्या फराळाची आठवण झाली.","मराठी"],["hi","बेसन लड्डू बहुत ताज़े और घी की खुशबू वाले थे। पैकिंग भी बढ़िया थी।","हिंदी"],["hi","पोहे का चिवड़ा हल्का और कुरकुरा था। पूरे परिवार को पसंद आया।","हिंदी"],["en","The kaju katli was soft and fresh, and the chivda stayed crisp till the last bite.","English"],["en","Ordered for festive gifting and everyone asked where it came from. Will order again!","English"]];
document.getElementById("rev").innerHTML=R.map(function(r){return'<div class="rc" lang="'+r[0]+'"><span class="sm">Sample</span><span class="st5" aria-label="5 stars">★★★★★</span><span class="lg">'+r[2]+"</span><p>“"+r[1]+"”</p><div class=\"by2\">— Customer name</div></div>"}).join("");
document.getElementById("wr").href=wa("Hi Reshma, here is my review of Taste Tales: ");
upd();
