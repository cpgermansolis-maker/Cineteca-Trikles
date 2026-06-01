// ===================================================================
// CINETECA TRIKLES — Service Worker (PWA)
// Estrategia: "network-first" para el cascarón (siempre intenta la red
// y muestra lo más reciente; si no hay internet, usa la copia en caché).
// NUNCA cachea las llamadas al Apps Script (datos siempre frescos).
// ===================================================================
const CACHE = 'trikles-v1';
const SHELL = ['./', './index.html', './manifest.json'];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL).catch(() => {})));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  // No interceptar datos en vivo (Apps Script / Google) ni fuentes externas.
  if (url.hostname.includes('script.google') ||
      url.hostname.includes('googleusercontent') ||
      url.hostname.includes('drive.google')) {
    return;
  }

  event.respondWith(
    fetch(req)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(req).then((m) => m || caches.match('./index.html')))
  );
});
