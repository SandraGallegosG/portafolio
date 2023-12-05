if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('./SW.js')
    .then(registrado => console.log("el service worker se registro",registrado))
    .catch(error=>console.log("error al registrar el servicio worker", error));
} else{
    console.log("el service worker no es compatible")
}