const CACHE_NAME = 'my-app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/sweetalert2/sweetalert2.min.js',
  '/assets/sweetalert2/sweetalert2.min.css',
  // Tambahkan file lain seperti logo, script, dll.
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Installed');
});

self.addEventListener('fetch', function(event) {
  // Bisa disesuaikan jika ingin offline support
});
