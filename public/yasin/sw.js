// Cache-first for everything under /yasin/, so the readings open with no signal.
// Bump VERSION whenever any file here changes, or installed copies keep the old one.
const VERSION = 'yasin-v2';
const FILES = [
  './', 'index.html', 'app.css', 'app.js', 'qris.js', 'push.js', 'config.js', 'manifest.webmanifest',
  'vendor/qrcode.js', 'fonts/amiri_regular.ttf', 'icons/icon-192.png', 'icons/icon-180.png',
  'data/yasin.json', 'data/tahlil.json', 'data/sholawat.json', 'data/hikmah.json',
  'data/maulid_books.json', 'data/maulid_chapters.json', 'data/maulid_contents.json',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('yasin-') && k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request)));
});

// FCM data messages ({ title, body, url, tag }). Every push must show a
// notification: iOS revokes the subscription of a page that stays silent.
self.addEventListener('push', (e) => {
  let d = {};
  try { const j = e.data?.json() ?? {}; d = j.data ?? j.notification ?? j; } catch { d = { body: e.data?.text() }; }
  e.waitUntil(self.registration.showNotification(d.title || 'Yasin, Tahlil & Maulid', {
    body: d.body || '',
    icon: 'icons/icon-192.png',
    badge: 'icons/icon-192.png',
    tag: d.tag,
    data: { url: d.url || './' },
  }));
});

self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const url = new URL(e.notification.data?.url || './', self.registration.scope).href;
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((wins) => {
    const win = wins.find((w) => w.url.startsWith(self.registration.scope));
    return win ? win.navigate(url).then((w) => (w || win).focus()) : self.clients.openWindow(url);
  }));
});
