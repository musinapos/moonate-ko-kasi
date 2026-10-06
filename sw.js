// MOONATE KO KASI - Fixed Service Worker
self.addEventListener('install', function(e) {
  self.skipWaiting();
});
self.addEventListener('activate', function(e) {
  e.waitUntil(clients.claim());
});
// Do nothing - let page load normally
self.addEventListener('fetch', function(e) {
  // Let browser handle it normally - no caching block
  return;
});
