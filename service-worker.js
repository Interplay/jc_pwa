
var dataCacheName = 'TODOData-v1.1.4'

var cacheName = 'todoPWA-1.5'

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