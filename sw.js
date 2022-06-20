let cachname='v1'

self.addEventListener('install',(e)=>{
   
    
})

self.addEventListener('fetch',e=>{
   e.respondWith(
       fetch(e.request)
       .then(res=>{
           const resclone= res.clone()
           caches.open(cachname).then(cache=>{
               cache.put(e.request,resclone)
           })
           return res
       })
       .catch(err=>caches.match(e.request).then(res=>res))

   )
})
