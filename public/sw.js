// public/sw.js
const CACHE_NAME = 'v1';

self.addEventListener('install', (event) => {
  console.log('SW: Instalado');
});

self.addEventListener('fetch', (event) => {
  // Exemplo: Estratégia Stale-while-revalidate
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});