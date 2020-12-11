// (function() {
//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker
//      .register('sw.js', { scope: './pwa-test'})
//      .then(function() { 
//         console.log('Service Worker Registered'); 
//       });
//   }
// })();

import {Workbox} from 'workbox-window';

if ('serviceWorker' in navigator) {
  const wb = new Workbox('/sw.js', { scope: '/pwa-test/'});

  wb.register();
}