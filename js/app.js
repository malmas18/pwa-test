// (function() {
//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker
//      .register('sw.js', { scope: './pwa-test'})
//      .then(function() { 
//         console.log('Service Worker Registered'); 
//       });
//   }
// })();

import {Workbox} from 'https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-window.prod.mjs';


if ('serviceWorker' in navigator) {
  const wb = new Workbox('/sw.js', { scope: '/pwa-test/'});

  wb.register();
}