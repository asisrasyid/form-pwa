self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Installed');
});

self.addEventListener('fetch', function(event) {
  // Bisa disesuaikan jika ingin offline support
});
