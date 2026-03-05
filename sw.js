// Mess Intel V4 — Service Worker
const CACHE_NAME = 'mess-intel-v4';
const ASSETS = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js',
    '/firebase-ratings.js',
    '/manifest.json',
    '/assets/food/breakfast.png',
    '/assets/food/curry.png',
    '/assets/food/biryani.png',
    '/assets/food/snacks.png',
    '/assets/food/dessert.png',
    '/assets/food/dal.png',
    '/assets/food/roti.png',
    '/assets/food/beverages.png',
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(names =>
            Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n)))
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request)
            .then(networkResponse => {
                // If network fetch succeeds, clone it into cache
                return caches.open(CACHE_NAME).then(cache => {
                    cache.put(e.request, networkResponse.clone());
                    return networkResponse;
                });
            })
            .catch(() => {
                // If network fails (offline), fall back to cache
                return caches.match(e.request);
            })
    );
});
