importScripts('workbox-sw.prod.v2.0.1.js');

const workboxSW = new self.WorkboxSW({clientsClaim: true})
workboxSW.precache([
  {
    "url": "favicon-32x32.png",
    "revision": "7b1da026f1c9dc9d8caadbe4bdb7b2a8"
  },
  {
    "url": "index.html",
    "revision": "57cef5539b7a89a70858d97948c68d32"
  },
  {
    "url": "itkVtkImageViewer.js",
    "revision": "3685f8003048e81210fdbda1ef9b357a"
  },
  {
    "url": "test.html",
    "revision": "a7927ae23ec755b9f0b3110a5d316f80"
  },
  {
    "url": "workbox-sw.prod.v2.0.1.js",
    "revision": "679d4e73dc756b21e46ee8f1bb52c882"
  }
])

workboxSW.router.registerRoute(
  /\.js|\.png$/,
  workboxSW.strategies.cacheFirst({
  cacheName: 'cacheFirstContent',
  cacheExpiration: {
    maxEntries: 50,
    maxAgeSeconds: 7 * 24 * 60 * 60 * 26,
    }
  })
);