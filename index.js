if("serviceWorker" in navigator){
    window.addEventListener('load',()=>{
        navigator.serviceWorker
        .register('sw.js')
        .then(()=>{
            console.log('registered successfully')
            
        })
        .catch((er)=>{
            console.log('can not register')
        })
    })

}
