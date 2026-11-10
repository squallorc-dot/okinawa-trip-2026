// Okinawa Trip 2026 · version 2026.11.10-13
const CACHE='okinawa-trip-2026.11.10-13';
const OFFLINE=['./','./index.html','./travel-tracking.js','./styles.css?v=20261110-13','./app.js?v=20261110-13','./data.js?v=20261110-13','./media.js?v=20261110-13','./assets/icon.svg','./assets/okinawa-og-2026-v2.jpg','./manifest.webmanifest','./refresh.html','./assets/photos/gyokusendo-cave-panoramio-jpg.webp','./assets/photos/toyoko-inn-naha-asahibashi-ekimae-jpg.webp','./assets/photos/manzamo-jpg.webp','./assets/photos/kouri-bridge-202006-jpg.webp','./assets/photos/churaumi-aquarium-main-tank-kuroshio-sea-jpg.webp','./assets/photos/american-village-in-okinawa-jpg.webp','./assets/photos/aeon-mall-okinawa-rycom-01-jpg.webp','./assets/photos/san-a-urasoe-west-coast-parco-city-jpg.webp','./assets/photos/chinen-misaki-park-jpg.webp','./assets/photos/osakana-center-itoman-jpg.webp','./assets/photos/umikaji-terrace-senagajima-jpg.webp','./assets/photos/panoramio-jpg.webp','./assets/photos/okinawa-outlet-mall-ashibinaa01n4500-jpg.webp','./assets/photos/iias-okinawa-toyosaki-202006-jpg.webp','./assets/photos/palette-kumoji-02-jpg.webp','./assets/photos/san-a-naha-main-place-20250505161500-jpg.webp','./assets/photos/kokusai-dori-01-jpg.webp','./assets/photos/naminoue-shrine-mainhall-jpg.webp','./assets/photos/omoromachi-jpg.webp','./assets/photos/kokusaidori-at-night-jpg.webp'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(OFFLINE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('okinawa-trip-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
// Brand image URLs remain at the official host. Cache on the viewer's own device,
// not in this public GitHub project. The 20 openly licensed scene photos are local.
const PRODUCT_IMAGE_CACHE="okinawa-product-viewer-cache-v1";
self.addEventListener("fetch",event=>{
 const req=event.request;
 if(req.method!=="GET")return;
 const url=new URL(req.url);
 if(url.origin!==self.location.origin){
   if(req.destination!=="image" || url.protocol!=="https:")return;
   event.respondWith((async()=>{
     const cache=await caches.open(PRODUCT_IMAGE_CACHE);
     const saved=await cache.match(req);
     if(saved)return saved;
     try{
       const response=await fetch(req);
       if(response.ok||response.type==="opaque")cache.put(req,response.clone()).catch(()=>{});
       return response;
     }catch{return Response.error();}
   })());
   return;
 }
 event.respondWith(fetch(req).then(res=>{
   if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy)).catch(()=>{});}
   return res;
 }).catch(()=>caches.match(req).then(r=>r||caches.match("./index.html"))));
});
