self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('push',e=>{let d={};try{d=e.data.json()}catch{}
 e.waitUntil(self.registration.showNotification(d.title||'Orbit',{body:d.body||'',icon:'icon-192.png',badge:'icon-192.png',tag:'orbit-'+Date.now()}))});
self.addEventListener('notificationclick',e=>{e.notification.close();
 e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(l=>l.length?l[0].focus():clients.openWindow('./')))});
