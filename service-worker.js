
var dataCacheName = 'JC-PWA-Data-Cache'

var cacheName = 'JC-PWA-Cache'

var filesToCache = [
    './',
      './index.html',
      './images/icons/jc-144x144.png',
      './images/jc_fheader.jpg',
      './images/sp1.jpeg',
      './images/sp2.jpeg',
      './images/sp3.jpeg',
      './images/sp4.jpeg',
      './images/sp5.jpeg',
      './images/su1.jpeg',
      './images/su2.jpeg',
      './images/su3.jpeg',
      './images/su4.jpeg',
      './images/su5.jpeg',
      './images/fa1.jpeg',
      './images/fa2.jpeg',
      './images/fa3.jpeg',
      './images/fa4.jpeg',
      './images/fa5.jpeg',
      './images/wi1.jpeg',
      './images/wi2.jpeg',
      './images/wi3.jpeg',
      './images/wi4.jpeg',
      './images/wi5.jpeg',
      './scripts/app.js',
      './styles/inline.css',
      './styles/materialize.css',
      './scripts/materialize.js',
      './index.html',
      './manifest.json',
      './favicon.ico'
]

self.addEventListener('install', function (e) {
      console.log('[ServiceWorker] Install')
      e.waitUntil(
             caches.open(cacheName).then(function (cache) {
                     console.log('[ServiceWorker] Caching app shell')
                     return cache.addAll(filesToCache)
              })
      )
})

self.addEventListener('activate', function (e) {
      console.log('[ServiceWorker] Activate')
      e.waitUntil(
              caches.keys().then(function (keyList) {
                       return Promise.all(keyList.map(function (key) {
                               if (key !== cacheName && key !== dataCacheName) {
                                    console.log('[ServiceWorker] Removing old cache', key)
                                    return caches.delete(key)
                               }
                        }))
              })
      )
      return self.clients.claim()
})

self.addEventListener('fetch', function (e) {
      console.log('[ServiceWorker] Fetch', e.request.url)
      e.respondWith(
             caches.match(e.request).then(function (response) {
                     return response || fetch(e.request)
             })
       )
})

function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.');

  event.notification.close();

  event.waitUntil(
    clients.openWindow('https://www.jcrew.com/promo.jsp?sidecar=true')
  );
});

self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'TEST PUSH';
  const options = {
    body: 'CLOTHES SALE!!!',
    icon: 'images/wi4.jpeg',
    badge: 'images/wi3.jpeg'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

