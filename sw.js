const CACHE_NAME = 'workout-v1';
// Liste des pages à garder en mémoire (ajoute tes futurs jours ici)
const ASSETS = [
  './',
  './index.html',
  './suivi.html',
  './lundi.html',
  './manifest.json',
  './icon-192.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});