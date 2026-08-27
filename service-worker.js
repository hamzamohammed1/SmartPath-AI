const CACHE_NAME = "smartpath-ai-v1";

const APP_FILES = [
  "./",
  "./index.html",
  "./manifest.json"
];


// Install
self.addEventListener("install", (event) => {
  console.log("SmartPath AI Service Worker Installed");

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(APP_FILES);
      })
  );

  self.skipWaiting();
});


// Activate
self.addEventListener("activate", (event) => {
  console.log("SmartPath AI Service Worker Activated");

  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});


// Fetch
self.addEventListener("fetch", (event) => {

  event.respondWith(

    caches.match(event.request)
    .then((response) => {

      return response || fetch(event.request);

    })
    .catch(() => {

      return caches.match("./index.html");

    })

  );

});
