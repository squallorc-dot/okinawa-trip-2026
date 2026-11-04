import {VERSION,HOTEL,FLIGHTS,LINKS,PLACES,DAYS,ROUTES,SHOPS,PRODUCTS,PHOTO_CREDITS} from "./data.js?v=20261105-05";
import {SCENE_PHOTOS,DAY_PHOTOS,OFFICIAL_PRODUCT_PHOTOS} from "./media.js?v=20261105-05";
const $ = (s)=>document.querySelector(s);
const enc = encodeURIComponent;
const esc = s=>String(s??"").replace(/[&<>"']/g,x=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[x]));
const state = {view:"overview",day:1,shopFilter:"all",shopDay:"all",shopSearch:"",routeDay:"all",opened:null};
const stored = (k,f)=>{try{return localStorage.getItem("okinawa-"+k)??f;}catch{return f;}};
const save = (k,v)=>{try{localStorage.setItem("okinawa-"+k,v);}catch{}};
const purchased = (()=>{try{return JSON.parse(stored("products","{}"))||{};}catch{return {};}})();
const official = (url,text="官方網站")=>url?'<a class="text-link" href="'+esc(url)+'" target="_blank" rel="noopener noreferrer">'+esc(text)+' ↗</a>':"";
const locationUrl = place=>"https://www.google.com/maps/search/?api=1&query="+enc(place?.query||place?.jp||place?.name||"");
const directionsUrl=(p,mode="walking")=>"https://www.google.com/maps/dir/?api=1&destination="+enc(p?.query||p?.jp||p?.name||"")+"&travelmode="+(mode==="transit"?"transit":mode==="driving"?"driving":"walking")+"&dir_action=navigate";
const travelUrl=(from,to,mode="transit")=>"https://www.google.com/maps/dir/?api=1&origin="+enc(from?.query||from?.jp||from?.name||"")+"&destination="+enc(to?.query||to?.jp||to?.name||"")+"&travelmode="+mode;
const jstDate=()=>new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Tokyo",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());
const today=DAYS.find(d=>d.date===jstDate());
const param=new URLSearchParams(location.search);
state.view=["overview","schedule","transport","shopping","info"].includes(param.get("view"))?param.get("view"):"overview";
state.day=Math.min(6,Math.max(1,Number(param.get("day"))||today?.n||1));
const icons={
 calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/>',
 bus:'<rect x="4" y="3" width="16" height="17" rx="3"/><path d="M4 11h16M8 20v2m8-2v2M8 15h.01M16 15h.01"/>',
 bag:'<path d="M5 8h14l1 13H4L5 8zM9 9V6a3 3 0 016 0v3"/>',
 info:'<circle cx="12" cy="12" r="10"/><path d="M12 10v7M12 7h.01"/>',
 pin:'<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 0116 0z"/><circle cx="12" cy="10" r="3"/>',
 walk:'<circle cx="13" cy="4" r="2"/><path d="m7 21 3-6m6 6-2-7-3-3-3 3-3 1m3-6 3-2 3 2"/>',
 train:'<rect x="5" y="2" width="14" height="18" rx="4"/><path d="M5 12h14M8 22l2-2m6 0 2 2M9 16h.01M15 16h.01"/>',
 taxi:'<path d="m5 11 2-5h10l2 5m-17 0h20v8H2v-8zM5 19v2m14-2v2"/><path d="M8 6V4h8v2"/>',
 arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',
 check:'<path d="m4 12 5 5L20 6"/>',
 clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
 copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a3 3 0 00-3-3H5a3 3 0 00-3 3v8a3 3 0 003 3h3"/>',
 down:'<path d="m6 9 6 6 6-6"/>',
 plane:'<path d="m22 2-9 20-2-9-9-2zM22 2 11 13"/>',
 hotel:'<rect x="4" y="3" width="16" height="19" rx="2"/><path d="M9 22v-6h6v6M8 7h1M15 7h1M8 11h1M15 11h1"/>',
 share:'<path d="M12 16V3m-5 5 5-5 5 5M4 13v7h16v-7"/>',
 home:'<path d="m3 10 9-7 9 7v11H3V10zM9 21v-8h6v8"/>',
 alert:'<path d="M12 3 2 21h20L12 3zM12 9v5M12 17h.01"/>',
 list:'<path d="M9 6h12M9 12h12M9 18h12M4 6h.01M4 12h.01M4 18h.01"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/>',
 book:'<path d="M4 4h14a2 2 0 012 2v15H6a2 2 0 01-2-2V4z"/><path d="M4 17a2 2 0 012-2h14"/>',
 map:'<path d="M3 5 10 2l7 3 4-2v16l-4 2-7-3-7 3V5zM10 2v16M17 5v16"/>',
 link:'<path d="M10 13a5 5 0 007.07 0l2-2a5 5 0 00-7.07-7.07l-1.2 1.2M14 11a5 5 0 00-7.07 0l-2 2a5 5 0 007.07 7.07l1.2-1.2"/>'
};
const icon=(n,size=20)=>'<svg class="ico" width="'+size+'" height="'+size+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(icons[n]||icons.pin)+'</svg>';
const navs=[["overview","總覽","home"],["schedule","行程","calendar"],["transport","交通","bus"],["shopping","必買","bag"],["info","資訊","info"]];
const actionButton=(label,href,kind="primary",name="pin")=>'<a class="button '+kind+'" href="'+esc(href)+'" target="_blank" rel="noopener noreferrer">'+icon(name,16)+esc(label)+'</a>';
const linkPlace=(id,small=false)=>{const p=PLACES[id];if(!p)return"";return '<a class="place-link" href="'+locationUrl(p)+'" target="_blank" rel="noopener noreferrer">'+icon("pin",14)+esc(p.name)+' ↗</a>';};
const dayLabel=d=>d.date.slice(5).replace('-','/')+'（'+d.weekday+'）';
const tripDateBanner=()=>'<div class="top-date">11.11 — 11.16 <span>·</span> 2026</div>';
const footer=()=>'<footer class="foot"><p>慢慢走，好好逛。願這趟沖繩旅程有海風，也有滿滿收穫。</p><p>時刻、站牌、營業與商品供貨會變動，以各官方及當日現場資訊為準。外部地圖及影片需網路。</p><p>網站版本 '+VERSION+' · <a href="./refresh.html">檢查更新</a></p></footer>';
const nav=()=>'<nav class="bottom-nav" aria-label="網站導覽">'+navs.map(([v,l,i])=>'<button data-view="'+v+'" class="'+(state.view===v?"active":"")+'" aria-current="'+(state.view===v?"page":"false")+'">'+icon(i,20)+'<span>'+l+'</span></button>').join("")+'</nav>';
const desktop=()=>'<aside class="side"><div class="side-kicker">OKINAWA · 2026</div><h2>沖繩，<br>慢慢走。</h2><p>6 天 5 夜 · 兩人的自由時光</p><nav class="side-nav">'+navs.map(([v,l,i])=>'<button class="'+(state.view===v?"active":"")+'" data-view="'+v+'">'+icon(i,19)+l+'</button>').join("")+'</nav><h3>六天旅程</h3><div class="side-days">'+DAYS.map(d=>'<button data-day="'+d.n+'" data-view="schedule" class="'+(state.view==="schedule"&&state.day===d.n?"active":"")+'"><span class="daynum">0'+d.n+'</span><span><b>'+dayLabel(d)+'</b><small>'+esc(d.title)+'</small></span></button>').join("")+'</div><small>點選日期，即可快速查看當天路線與交通提醒。</small></aside>';
const desktopUtility=()=>{
 const checked=PRODUCTS.filter(p=>purchased[p.id]==="已買").length;
 return '<aside class="utility-rail" aria-label="旅程快查"><div class="utility-kicker">TRAVEL COMPANION</div><h2>旅程快查</h2><p class="utility-intro">常用資訊，隨時一眼找到。</p><div class="utility-card"><span class="utility-label">'+icon("hotel",17)+'今晚住宿</span><strong>東橫INN 旭橋</strong><small>那霸 · 6 天 5 夜定點住宿</small><a class="utility-link" href="'+directionsUrl(PLACES.hotel,"transit")+'" target="_blank" rel="noopener noreferrer">返回飯店 '+icon("arrow",15)+'</a></div><div class="utility-card"><span class="utility-label">'+icon("clock",17)+'重要集合</span><button data-day="2" data-view="schedule"><b>11/12 · 08:20</b><small>BLUE SEAL 久茂地</small></button><button data-day="4" data-view="schedule"><b>11/14 · 07:50</b><small>縣民廣場</small></button></div><div class="utility-card"><span class="utility-label">'+icon("bus",17)+'交通關鍵</span><button data-day="3" data-view="schedule"><b>11/13 來客夢</b><small>152 號去程／385 號回程</small></button><button data-view="transport"><b>所有交通指引</b><small>站名、方向與導航</small></button></div><div class="utility-card"><span class="utility-label">'+icon("plane",17)+'航班</span><div class="utility-line"><strong>JX312</strong><small>11/11 · 17:00</small></div><div class="utility-line"><strong>JX313</strong><small>11/16 · 20:30</small></div><button class="utility-link" data-view="info">航班與行李 '+icon("arrow",15)+'</button></div><div class="utility-card"><span class="utility-label">'+icon("bag",17)+'必買進度</span><strong>'+checked+' / '+PRODUCTS.length+' 項已買</strong><button class="utility-link" data-view="shopping">打開清單 '+icon("arrow",15)+'</button></div></aside>';
};
const header=()=>'<header class="topbar"><a class="identity" href="./" aria-label="沖繩旅遊首頁"><span class="mark">沖</span><span><b>沖繩，慢慢走。</b><small>2026 · OKINAWA TRIP</small></span></a><div class="header-actions">'+tripDateBanner()+'<button class="icon-button" data-share title="分享目前頁面" aria-label="分享">'+icon("share",19)+'</button></div></header>';
const dayTabs=()=>'<div class="day-tabs" role="tablist" aria-label="切換日期">'+DAYS.map(d=>'<button role="tab" aria-selected="'+(state.day===d.n)+'" class="'+(state.day===d.n?"active":"")+'" data-day="'+d.n+'"><span>DAY '+d.n+'</span><strong>'+d.date.slice(5).replace('-','/')+'</strong></button>').join("")+'</div>';
const sectionTitle=(tag,title,extra="")=>'<div class="section-title"><div><span class="eyebrow">'+tag+'</span><h2>'+title+'</h2></div>'+extra+'</div>';
// 地點照片只連接對應的實際景點；載入失敗就保留抽象風景背景。
const photoTag=(src,alt,cls="")=>src?'<img class="'+esc(cls)+'" src="'+esc(src)+'" alt="'+esc(alt)+'" loading="lazy" decoding="async" onerror="this.onerror=null;this.style.display=\'none\';this.parentElement.classList.add(\'image-failed\')">':"";
const art=(type)=>'<div class="visual visual-'+esc(type||"ocean")+'"><span class="visual-sun"></span><span class="visual-hill"></span><span class="visual-hill two"></span><span class="visual-wave w1"></span><span class="visual-wave w2"></span><span class="visual-caption">OKINAWA · 2026</span></div>';
const dayHero=(day)=>'<section class="hero hero-photographic hero-day-'+day.n+'">'+art(day.cover)+'<div class="hero-photo">'+photoTag(DAY_PHOTOS[day.n],day.title,"hero-img")+'</div><div class="hero-copy"><div class="eyebrow">OUR OKINAWA DAYS · DAY 0'+day.n+'</div><h1>'+esc(day.title)+'</h1><p>'+esc(day.tag)+'</p><div class="hero-tags"><span>'+icon("calendar",16)+dayLabel(day)+'</span><span>'+icon("hotel",16)+'那霸定點住宿 · 6天5夜</span></div></div><span class="hero-corner">旅の記録 · OKINAWA</span></section>';
const dayHighlights={
1:["今晚重點","抵達後先入住，晚餐與超市順路即可","hotel"],
2:["集合提醒","08:20 BLUE SEAL 久茂地店｜依 Klook 憑證確認","bluseal"],
3:["搭車提醒","09:37（原訂）那霸巴士總站搭 152 號｜回程優先查 385 號","busTerminal"],
4:["集合提醒","07:50 縣民廣場｜確認南部團購物停留選項","kenmin"],
5:["購物路線","歌町與天久 → 牧志國際通 → 縣政府前","kokusai"],
6:["回程優先","先確認行李配送，16:00–16:30 到機場取行李","airport"]
};
const dayEssentials=n=>{const [label,description,locationId]=dayHighlights[n]||[];const p=PLACES[locationId];return '<div class="day-essentials"><div class="day-essentials-mark">'+icon(n===6?"plane":n===2||n===4?"clock":n===3?"bus":"pin",23)+'</div><div><span>DAY '+n+' · '+esc(label)+'</span><strong>'+esc(description)+'</strong></div>'+(p?'<a class="essentials-action" href="'+locationUrl(p)+'" target="_blank" rel="noopener noreferrer">地點 '+icon("arrow",14)+'</a>':'')+'</div>';};
const overview=()=>{
 const d=today||DAYS[0], dayNum=d.n;
 const checkpoints=[["JX312","11/11 17:00","台中 → 那霸"],["JX313","11/16 20:30","那霸 → 台中"]];
 return '<section class="overview-hero"><div class="overview-photo">'+photoTag(DAY_PHOTOS[2],"沖繩古宇利島海景","overview-img")+'</div><div class="overview-head"><span class="eyebrow">OKINAWA · 2026.11.11—11.16</span><h1>沖繩，<br>慢慢走。</h1><p>六天五夜・海景、商場與兩人的旅行時光</p><div class="overview-hero-buttons"><button class="button primary-on-dark" data-day="'+dayNum+'">'+icon("calendar",17)+(today?"查看今天行程":"開始六天行程")+'</button><button class="button light-on-dark" data-view="transport">'+icon("bus",17)+'交通指南</button></div></div><span class="hero-corner">旅の記録 · OKINAWA</span></section>'+
 '<div class="overview-intro">'+sectionTitle("TRIP AT A GLANCE","旅程一眼掌握")+'<div class="overview-quick"><div class="overview-quick-item"><span>'+icon("plane",18)+'去程航班</span><strong>11/11 JX312</strong><small>17:00 台中 → 19:30 那霸</small></div><div class="overview-quick-item"><span>'+icon("hotel",18)+'固定住宿</span><strong>東橫INN 旭橋</strong><small>11/11–11/16 · 5 晚</small></div><div class="overview-quick-item"><span>'+icon("plane",18)+'回程航班</span><strong>11/16 JX313</strong><small>20:30 那霸 → 21:20 台中</small></div></div></div>'+
 '<div class="overview-alert"><div>'+icon("alert",20)+'</div><p><strong>出發前小提醒</strong><span>Day 2／4 請先核對 Klook 集合點；Day 3 再查 152、385 號巴士；Day 6 先確認行李配送預約。</span></p></div>'+
 sectionTitle("THE SIX DAYS","六天旅程",'<button class="section-link" data-view="schedule">查看詳細行程 '+icon("arrow",15)+'</button>')+
 '<div class="overview-day-grid">'+DAYS.map(day=>'<button class="overview-day-card" data-day="'+day.n+'"><span class="overview-day-image">'+photoTag(DAY_PHOTOS[day.n],day.title,"overview-day-img")+'<span class="overview-number">DAY 0'+day.n+'</span></span><span class="overview-day-body"><small>'+day.date.slice(5).replace('-','/')+'（'+day.weekday+'） · '+esc(day.kind)+'</small><strong>'+esc(day.title)+'</strong><em>'+esc(day.tag)+'</em><span class="overview-day-more">探索當日行程 '+icon("arrow",15)+'</span></span></button>').join("")+'</div>'+
 '<div class="overview-shortcuts">'+sectionTitle("QUICK LINKS","現場常用快捷")+'<div class="shortcut-grid"><a href="'+directionsUrl(PLACES.hotel,"transit")+'" target="_blank" rel="noopener noreferrer">'+icon("home",23)+'<span><b>返回飯店</b><small>開啟 Google Maps 導航</small></span>'+icon("arrow",16)+'</a><button data-view="transport">'+icon("bus",23)+'<span><b>交通搭乘指南</b><small>巴士・單軌・計程車</small></span>'+icon("arrow",16)+'</button><button data-view="shopping">'+icon("bag",23)+'<span><b>必買清單</b><small>商品、商場與已買狀態</small></span>'+icon("arrow",16)+'</button><button data-view="info">'+icon("info",23)+'<span><b>旅遊資訊</b><small>航班・飯店・機場</small></span>'+icon("arrow",16)+'</button></div></div>'+footer();
};
const schedule=()=>{
 const d=DAYS[state.day-1];
 return dayTabs()+dayHero(d)+'<div class="day-subheading"><span>'+icon("clock",15)+esc(d.kind)+'</span><span>'+icon("hotel",15)+(d.n===6?"回程日":"每晚住宿：旭橋站附近")+'</span></div>'+dayEssentials(d.n)+sectionTitle("THE PLAN","今天的行程",'<button class="section-link" data-view="transport" data-route-day="'+d.n+'">查看當日交通 '+icon("arrow",15)+'</button>')+'<div class="timeline">'+d.events.map((e,i)=>timelineEntry(e,d.n,i)).join("")+'</div><div class="trip-note">'+icon("alert",19)+'<div><b>今天的小提醒</b><p>'+esc(d.tip)+'</p></div></div>'+dayShopping(d.n)+footer();
};
const timelineEntry=(e,day,i)=>{
  const p=PLACES[e.place];const route=ROUTES.find(r=>r.id===e.route);
  const symbol=({flight:"plane",meeting:"pin",move:"bus",shop:"bag",food:"clock",critical:"alert",sight:"map",optional:"list",plan:"clock"})[e.type]||"pin";
  const photograph=p&&(e.type==="sight"||e.type==="shop"||e.type==="optional")?SCENE_PHOTOS[e.place]:null;
  return '<article class="timeline-item"><span class="timeline-rail"><span>'+icon(symbol,17)+'</span></span><div class="event '+(photograph?'has-event-photo':'')+'">'+(photograph?'<div class="event-photo">'+photoTag(photograph,p.name,"event-image")+'<span class="photo-label">'+esc(p.name)+'</span></div>':'')+'<div class="event-body"><div class="event-top"><time>'+esc(e.t)+'</time><span class="event-kind">'+({meeting:"集合",flight:"航班",move:"移動",shop:"逛街",critical:"重要",sight:"景點",optional:"順路",food:"休息",plan:"準備"}[e.type]||"行程")+'</span></div><h3>'+esc(e.title)+'</h3><p>'+esc(e.detail)+'</p>'+(p?'<div class="event-place">'+linkPlace(e.place)+'</div>':'')+'<div class="event-actions">'+(p?actionButton("導航到這裡",directionsUrl(p,"walking"),"outline","pin"):"")+(route?'<button class="button ghost" data-route="'+route.id+'">'+icon("bus",16)+'查看這段交通</button>':'')+(p?.floors?.length?'<button class="button ghost" data-place="'+e.place+'">'+icon("bag",16)+'樓層攻略</button>':'')+'</div></div></div></article>';
};
const dayShopping=(day)=>{
 const items=SHOPS.filter(s=>s.day===day);if(!items.length)return "";
 return '<section class="day-shops">'+sectionTitle("SHOP & STROLL","這天可以逛的地方")+'<div class="shop-grid">'+items.map(s=>{
  const p=PLACES[s.ref];const photograph=SCENE_PHOTOS[s.ref];
  return '<article class="mini-shop">'+(photograph?'<div class="shop-photo">'+photoTag(photograph,p?.name||"沖繩商場","shop-image")+'</div>':'')+'<div class="mini-shop-inner"><div><span>'+esc(s.group)+'</span><h3>'+esc(p?.name||"")+'</h3><p>'+esc(s.priorities.slice(0,3).join(" · "))+'</p></div><button data-place="'+s.ref+'">看店鋪與樓層 '+icon("arrow",15)+'</button></div></article>';
 }).join("")+'</div></section>';
};
const transport=()=>{const opts=[["all","全部路線"],...DAYS.map(d=>[String(d.n),"D"+d.n+" "+dayLabel(d)])];const rows=ROUTES.filter(r=>state.routeDay==="all"||r.day===Number(state.routeDay));return '<div class="page-heading"><span class="eyebrow">GETTING AROUND</span><h1>交通，一段一段看清楚。</h1><p>站名、搭車方向與轉乘方式集中在這裡；重要路線可從每天行程直接跳轉。</p></div><div class="travel-home"><div>'+icon("home",24)+'<div><b>快速返回飯店</b><span>'+esc(HOTEL.jp)+'</span></div></div>'+actionButton("從目前位置導航",directionsUrl(PLACES.hotel,"transit"),"primary","pin")+'</div><div class="transport-legend"><span>'+icon("alert",15)+'公車時刻、月台以當日公告為準</span><span>'+icon("map",15)+'地圖可即時重新規劃，但不保證與指定路線相同</span></div><div class="filters">'+opts.map(([v,l])=>'<button class="pill '+(state.routeDay===v?"active":"")+'" data-route-filter="'+v+'">'+esc(l)+'</button>').join("")+'</div><div class="route-stack">'+rows.map(routeCard).join("")+'</div><div class="trip-note">'+icon("info",19)+'<p>Google Maps 的轉乘建議可能不使用表定巴士號碼。若需搭指定 152 或 385 號，請依卡片的路線號碼及官方站牌確認，再參考 Google Maps。</p></div>'+footer();};
const routeCard=r=>{const a=PLACES[r.from],b=PLACES[r.to];const m={taxi:["taxi","計程車"],walking:["walk","步行"],bus:["bus","巴士"],rail:["train","單軌"]}[r.mode]||["map","移動"];return '<article class="route-card" id="route-'+esc(r.id)+'"><div class="route-head"><div class="route-icon">'+icon(m[0],22)+'</div><div><small>DAY '+r.day+' · '+m[1]+'</small><h3>'+esc(r.title)+'</h3><p>'+esc(r.short)+'</p></div></div><div class="station-pair"><span>'+esc(a?.jp||a?.name||"")+'</span>'+icon("arrow",15)+'<span>'+esc(b?.jp||b?.name||"")+'</span></div><div class="route-actions">'+actionButton("起點地圖",locationUrl(a),"outline","pin")+actionButton("終點地圖",locationUrl(b),"outline","pin")+actionButton("查 A→B 路線",travelUrl(a,b,r.mode==="taxi"?"driving":r.mode==="walking"?"walking":"transit"),"primary","map")+'</div><details '+(state.opened===r.id?"open":"")+'><summary>怎麼搭？查看完整步驟 '+icon("down",16)+'</summary><ol>'+r.steps.map(s=>'<li>'+esc(s)+'</li>').join("")+'</ol>'+(r.note?'<p class="route-note">'+icon("alert",16)+esc(r.note)+'</p>':'')+(r.official?official(r.official,"官方資訊／班次"):"")+'</details></article>';};
const statusList=[["all","全部"],["未買","未買"],["已買","已買"],["沒找到","沒找到"]];
const shopping=()=>{const count=PRODUCTS.filter(p=>purchased[p.id]==="已買").length;const available=PRODUCTS.filter(p=>(state.shopFilter==="all"||(purchased[p.id]||"未買")===state.shopFilter)&&(state.shopDay==="all"||p.where.includes(state.shopDay))&&((p.name+p.jp+p.brand+p.cat+p.photo).toLowerCase().includes(state.shopSearch.toLowerCase())));return '<div class="page-heading"><span class="eyebrow">THE SHOPPING LIST</span><h1>想買的，都整理好了。</h1><p>依21 張參考照片逐項核對；第 1、2 張為同款，照片 8 有兩款髮油。依商品、狀態及商場篩選，現場找貨更方便。</p></div><div class="shopping-progress"><div><small>已買商品</small><strong>'+count+' <span>/ '+PRODUCTS.length+'</span></strong></div><div class="progress"><span style="width:'+(count/PRODUCTS.length*100)+'%"></span></div></div><div class="filter-panel"><div class="filters">'+statusList.map(([v,l])=>'<button class="pill '+(state.shopFilter===v?"active":"")+'" data-shop-filter="'+v+'">'+l+'</button>').join("")+'</div><label class="searchbox">'+icon("search",18)+'<input id="shop-search" placeholder="搜尋商品、品牌、原照片編號" value="'+esc(state.shopSearch)+'" autocomplete="off"></label><label class="select-label">目前要逛的商場 <select id="shop-day"><option value="all">所有購物地點</option>'+SHOPS.map(s=>'<option value="'+s.id+'" '+(state.shopDay===s.id?"selected":"")+'>'+esc(PLACES[s.ref]?.name||s.id)+'</option>').join("")+'</select></label></div><div class="product-grid">'+(available.length?available.map(productCard).join(""):'<div class="empty">目前沒有符合篩選條件的商品。</div>')+'</div><div class="trip-note">'+icon("info",19)+'<p>列出的購物地點是尋找建議，並非即時庫存。部分包包款式或商品規格仍須現場核對；購物狀態保存在這支手機，兩支手機不會自動同步。</p></div>'+footer();};
const productCard=p=>{
 const st=purchased[p.id]||"未買";const image=OFFICIAL_PRODUCT_PHOTOS[p.id]||"";
 const detail=p.status==="variant"?"款式待核對":p.status==="likely"?"品名待核對":"";
 const visual=image?'<img class="product-image" src="'+esc(image)+'" alt="'+esc(p.name)+'" loading="lazy" onerror="this.style.display=\'none\';this.parentElement.classList.add(\'image-failed\')">':'<span class="product-placeholder">'+icon("bag",30)+'<small>官方商品照待補</small></span>';
 return '<article class="product-card" data-product="'+p.id+'"><div class="product-photo">'+visual+'</div><div class="product-main"><div class="product-tags"><span>'+esc(p.cat)+'</span>'+(detail?'<span class="needs-check">'+detail+'</span>':'')+'</div><h3>'+esc(p.name)+'</h3><p class="jp">'+esc(p.jp)+'</p><p class="product-locations">'+icon("pin",14)+esc(p.where.map(id=>PLACES[id]?.name||id).slice(0,3).join("、"))+'</p>'+(p.note?'<p class="product-note">'+esc(p.note)+'</p>':'')+'<div class="product-state" role="group" aria-label="'+esc(p.name)+'購買狀態">'+["未買","已買","沒找到"].map(v=>'<button data-product-id="'+p.id+'" data-product-state="'+v+'" class="'+(st===v?"selected":"")+'">'+(v==="已買"?icon("check",14):"")+v+'</button>').join("")+'</div><div class="product-links">'+(p.official?official(p.official,"官方商品頁"):'<a class="source-link" target="_blank" rel="noopener noreferrer" href="https://www.google.com/search?q='+enc(p.query||p.name)+'">查商品官網 ↗</a>')+(p.storeLink?official(p.storeLink,"指定商品頁"):"")+'</div></div></article>';
};
const info=()=>'<div class="page-heading"><span class="eyebrow">TRAVEL ESSENTIALS</span><h1>出發前，重要的都在這。</h1><p>航班、飯店、機場取件及退稅，以容易查找的方式集中整理。</p></div>'+sectionTitle("FLIGHTS","去回程航班")+'<div class="flight-grid">'+FLIGHTS.map(f=>'<article class="flight"><div class="flight-top"><span>'+esc(f.direction)+' · '+esc(f.date)+'</span><strong>'+esc(f.flight)+'</strong></div><div class="flight-between"><div><strong>'+esc(f.depart)+'</strong><small>'+esc(f.from)+'</small></div><span>'+icon("plane",23)+'<small>'+esc(f.duration)+'</small></span><div><strong>'+esc(f.arrival)+'</strong><small>'+esc(f.to)+'</small></div></div><div class="flight-foot">'+esc(f.fare)+' · '+esc(f.bag)+'</div><p class="muted">'+esc(f.note)+'</p></article>').join("")+'</div><div class="quick-links">'+official(LINKS.starlux,"星宇航空線上報到（48～1小時）")+official(LINKS.airport,"那霸機場官方資訊")+'</div>'+sectionTitle("OUR BASE","固定飯店")+'<article class="hotel-panel"><div><h3>'+esc(HOTEL.name)+'</h3><p class="jp">'+esc(HOTEL.jp)+'</p><p>'+esc(HOTEL.address)+'</p><p>電話：'+esc(HOTEL.tel)+'</p></div><div class="hotel-times"><div><small>免費早餐</small><b>'+HOTEL.breakfast+'</b></div><div><small>退房</small><b>'+HOTEL.checkout+'</b></div></div><div class="route-actions">'+actionButton("導航飯店",directionsUrl(PLACES.hotel),"primary","pin")+'<button class="button outline" data-copy="'+esc(HOTEL.jp+"\n"+HOTEL.address+"\nTEL "+HOTEL.tel)+'">'+icon("copy",16)+'複製日文地址</button></div></article>'+sectionTitle("LAST DAY","11/16 機場與行李")+'<div class="checkpoints">'+[
 ["09:30","從東橫INN退房；已預訂 Airporter 才可於飯店交件。"],
 ["16:00–16:30","預計抵達那霸機場，先至 Before U Go 確認行李領取。"],
 ["報到前","若有符合退稅條件的商品，先進行必要的海關確認，商品不可先託運。"],
 ["約18:30","20:30 起飛前兩小時，預估星宇櫃檯開放；以當日機場資訊為準。"],
 ["20:30","星宇 JX313 從那霸起飛，21:20 抵達台中。"]
].map(([t,s],i)=>'<div><span>'+t+'</span><p>'+s+'</p></div>').join("")+'</div><div class="quick-links">'+official(LINKS.airporter,"Airporter 行李配送資訊")+official(LINKS.airporttax,"那霸機場退稅公告")+official(LINKS.tax,"日本退稅介紹")+'</div>'+sectionTitle("BEFORE YOU GO","重要提醒")+'<div class="info-cards"><details><summary>線上報到與行李規定 '+icon("down",17)+'</summary><p>星宇航空起飛前 48～1 小時可辦理線上報到。托運額度及行李件數依實際電子機票。行動電源、備用鋰電池原則上要隨身攜帶，不可托運；液體等物品依日本與航空公司規定。</p></details><details><summary>2026/11/1 起退稅流程 '+icon("down",17)+'</summary><p>日本改為先支付含稅價格，於出境接受海關確認後才辦理退款。符合退稅的商品可能需要出示，託運前先確認。實際適用條件依日本官方公告。</p></details><details><summary>交通票卡與巴士現場搭乘 '+icon("down",17)+'</summary><p>單軌搭乘方向、站名與末班依現場看板。巴士應核對號碼、終點方向、上車口與整理券／付款方法，不把 Google Maps 推薦的其他路線誤認為指定班車。</p></details><details><summary>飯店及行李的 A／B 備案 '+icon("down",17)+'</summary><p>A：已向 Airporter 成功預約、確認交件與取件規則，輕裝逛完前往機場。B：未成功預訂，須回飯店拿行李，赤嶺站行程視時間取消。</p></details><details><summary>官方商場、影片與優惠券 '+icon("down",17)+'</summary><div class="list-links">'+[["AEON 來客夢商店",LINKS.aeon],["AEON 優惠券",LINKS.aeoncoupon],["PARCO CITY 官方",LINKS.parco],["PARCO CITY 影片",LINKS.parcoVideo],["國際通影片①",LINKS.streetVideo],["國際通影片②",LINKS.streetVideo2],["國際通短片",LINKS.streetShort],["琉貿百貨官方",LINKS.ryubo],["那霸單軌官方",LINKS.yui],["沖繩巴士官方查詢",LINKS.bus]].map(([a,b])=>official(b,a)).join("")+'</div></details></div>'+footer();
const modalPlace=(id)=>{
 const p=PLACES[id];if(!p)return;const related=SHOPS.find(s=>s.ref===id);const img=SCENE_PHOTOS[id];
 showModal((img?'<div class="modal-place-photo">'+photoTag(img,p.name,"modal-image")+'</div>':'')+'<div class="modal-eyebrow">PLACE GUIDE</div><h2>'+esc(p.name)+'</h2><p class="jp">'+esc(p.jp)+'</p><p class="muted">'+esc(p.desc||"實際營業時間與商品供貨依官方資訊為準。")+'</p>'+(p.floors?.length?'<h3>本次想逛的樓層</h3><div class="floor-list">'+p.floors.map(([fl,t])=>'<div><span>'+esc(fl)+'</span><p>'+esc(t)+'</p></div>').join("")+'</div>':"")+(related?'<h3>本次優先找</h3><p>'+esc(related.priorities.join("、"))+'</p>':"")+'<div class="route-actions">'+actionButton("地圖導航",directionsUrl(p),"primary","pin")+(p.link?actionButton("官方資訊",p.link,"outline","link"):"")+'</div><p class="muted">樓層店家依本次購物重點整理，實際進駐與優惠依商場官方店鋪表。</p>');
};
const modalRoute=(id)=>{state.view="transport";state.routeDay="all";state.opened=id;render();const el=$("#route-"+id);if(el){el.scrollIntoView({behavior:"smooth",block:"start"});}syncUrl();};
const showModal=(html)=>{const root=$("#modal-root");root.innerHTML='<div class="overlay" data-close-modal><div role="dialog" aria-modal="true" aria-label="詳細資訊" class="modal"><button class="modal-close" aria-label="關閉" data-close-modal>×</button>'+html+'</div></div>';document.body.classList.add("has-modal");};
const closeModal=()=>{$("#modal-root").innerHTML="";document.body.classList.remove("has-modal");};
const syncUrl=()=>{const u=new URL(location.href);u.searchParams.set("view",state.view);u.searchParams.set("day",state.day);history.replaceState(null,"",u);};
const render=()=>{const root=$("#app");if(!root)return;root.innerHTML=header()+'<div class="shell">'+desktop()+'<main id="content" tabindex="-1">'+({overview,schedule,transport,shopping,info}[state.view]||overview)()+'</main>'+desktopUtility()+'</div>'+nav()+'<div id="modal-root"></div>';};
const switchView=(v)=>{state.view=v;state.opened=null;render();syncUrl();scrollTo({top:0,behavior:"instant"});};
document.addEventListener("click",async e=>{
  const modal=e.target.closest("[data-close-modal]");if(modal&&(e.target===modal||e.target.closest(".modal-close"))){closeModal();return;}
  const day=e.target.closest("[data-day]");if(day){state.day=Number(day.dataset.day);switchView(day.dataset.view||"schedule");return;}
  const view=e.target.closest("[data-view]");if(view){const rd=view.dataset.routeDay;state.routeDay=rd||"all";switchView(view.dataset.view);return;}
  const filter=e.target.closest("[data-route-filter]");if(filter){state.routeDay=filter.dataset.routeFilter;render();return;}
  const sf=e.target.closest("[data-shop-filter]");if(sf){state.shopFilter=sf.dataset.shopFilter;render();return;}
  const ps=e.target.closest("[data-product-state]");if(ps){purchased[ps.dataset.productId]=ps.dataset.productState;save("products",JSON.stringify(purchased));const y=scrollY;render();scrollTo(0,y);return;}
  const route=e.target.closest("[data-route]");if(route){modalRoute(route.dataset.route);return;}
  const place=e.target.closest("[data-place]");if(place){modalPlace(place.dataset.place);return;}
  const copy=e.target.closest("[data-copy]");if(copy){try{await navigator.clipboard.writeText(copy.dataset.copy);copy.classList.add("copied");copy.textContent="已複製地址";}catch{showModal("<h2>飯店日文地址</h2><p>"+esc(copy.dataset.copy).replace(/\n/g,"<br>")+"</p>");}return;}
  const share=e.target.closest("[data-share]");if(share){try{if(navigator.share)await navigator.share({title:"沖繩，慢慢走。",url:location.href});else{await navigator.clipboard.writeText(location.href);share.title="已複製分享網址";}}catch{}}
});
document.addEventListener("input",e=>{if(e.target.id==="shop-search"){const pos=e.target.selectionStart;state.shopSearch=e.target.value;const cont=$(".product-grid");if(cont){const rs=PRODUCTS.filter(p=>(state.shopFilter==="all"||(purchased[p.id]||"未買")===state.shopFilter)&&(state.shopDay==="all"||p.where.includes(state.shopDay))&&((p.name+p.jp+p.brand+p.cat+p.photo).toLowerCase().includes(state.shopSearch.toLowerCase())));cont.innerHTML=rs.length?rs.map(productCard).join(""):'<div class="empty">目前沒有符合的商品。</div>';}}});
document.addEventListener("change",e=>{if(e.target.id==="shop-day"){state.shopDay=e.target.value;const y=scrollY;render();scrollTo(0,y);}});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});
window.addEventListener("popstate",()=>{const p=new URLSearchParams(location.search);state.view=["overview","schedule","transport","shopping","info"].includes(p.get("view"))?p.get("view"):"overview";state.day=Math.max(1,Math.min(6,Number(p.get("day"))||1));render();});
render();
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
