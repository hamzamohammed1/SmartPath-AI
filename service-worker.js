const CACHE_NAME = "smartpath-ai-v1";


const FILES_TO_CACHE = [

"./",

"./index.html",
"./planner.html",
"./competency.html",
"./about.html",
"./ai-request.html",
"./check.html",


"./home-style.css",
"./splash.css",
"./app-download.css",


"./home-slider.js",
"./app-download.js",
"./aura-ai.js",


"./logo.png",
"./icon-192.png",
"./icon-512.png"

];


// Install

self.addEventListener("install", event => {

event.waitUntil(

caches.open(CACHE_NAME)
.then(cache => {

return cache.addAll(FILES_TO_CACHE);

})

);


self.skipWaiting();

});



// Activate

self.addEventListener("activate", event => {

event.waitUntil(

caches.keys().then(keys => {

return Promise.all(

keys.map(key => {

if(key !== CACHE_NAME){

return caches.delete(key);

}

})

);

})

);


self.clients.claim();

});



// Fetch

self.addEventListener("fetch", event => {


event.respondWith(


caches.match(event.request)

.then(response => {


return response || fetch(event.request);


})


);


});
