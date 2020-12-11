(function() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
     .register('sw.js', { scope: '/pwa-test/'})
     .then(function() { 
        console.log('Service Worker Registered'); 
      });
  }
})();