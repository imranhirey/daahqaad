let cachname='v2'
let cachassets=[
    'index.html',
    'index.js',
    'about.html'
]
self.addEventListener('install',(e)=>{
    e.waitUntil(
        caches
        .open(cachname)
        .then(cache=>{
            cache.addAll(cachassets)
        })
        .then(()=>{
            self.skipWaiting()
        })
    )
    
})

self.addEventListener('fetch',e=>{
    console.log(e.request)
    e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))
})
