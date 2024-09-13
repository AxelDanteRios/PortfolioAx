let sonido_on = document.querySelector(".sonido");
let sonido_off = document.querySelector(".sonido_mute");
let sonido_onNocUno = document.querySelector(".sonidoNocUno");
let sonido_offNocUno = document.querySelector(".sonido_muteNocUno");
let sonido_onNocDos = document.querySelector(".sonidoNocDos");
let sonido_offNocDos = document.querySelector(".sonido_muteNocDos");
let sonido_onNocTres = document.querySelector(".sonidoNocTres");
let sonido_offNocTres= document.querySelector(".sonido_muteNocTres");
let sonido_onLick = document.querySelector(".sonidoLick");
let sonido_offLick = document.querySelector(".sonido_muteLick");
let sonido_onSolsium = document.querySelector(".sonidoSolsium");
let sonido_offSolsium = document.querySelector(".sonido_muteSolsium");
let sonido_onSolsiumII = document.querySelector(".sonidoSolsiumII");
let sonido_offSolsiumII = document.querySelector(".sonido_muteSolsiumII");
let sonido_onImp = document.querySelector(".sonidoImp");
let sonido_offImp = document.querySelector(".sonido_muteImp");
let sonido_onAlgunas = document.querySelector(".sonidoAlgunas");
let sonido_offAlgunas = document.querySelector(".sonido_muteAlgunas");
let sonido_onDoby = document.querySelector(".sonidoDoby");
let sonido_offDoby = document.querySelector(".sonido_muteDoby");
let sonido_onMar = document.querySelector(".sonidoMar");
let sonido_offMar = document.querySelector(".sonido_muteMar");
let sonido_onMorir = document.querySelector(".sonidoMorir");
let sonido_offMorir = document.querySelector(".sonido_muteMorir");
let girasoles = document.querySelector(".girasoles");
let nocUno = document.querySelector(".nocUno");
let nocDos = document.querySelector(".nocDos");
let nocTres = document.querySelector(".nocTres");
let lick = document.querySelector(".lick");
let solsium = document.querySelector(".solsium");
let solsiumII = document.querySelector(".solsiumII");
let imp = document.querySelector(".imp");
let algunas = document.querySelector(".algunas");
let doby = document.querySelector(".doby");
let mar = document.querySelector(".mar");
let morir = document.querySelector(".morir");

sonido_on.addEventListener("click",()=>{
    girasoles.play();
})
sonido_off.addEventListener("click",()=>{
    girasoles.pause();
})

sonido_onNocUno.addEventListener("click",()=>{
    nocUno.play();
})
sonido_offNocUno.addEventListener("click",()=>{
    nocUno.pause();
})

sonido_onNocDos.addEventListener("click",()=>{
    nocDos.play();
})
sonido_offNocDos.addEventListener("click",()=>{
    nocDos.pause();
})


sonido_onNocTres.addEventListener("click",()=>{
    nocTres.play();
})
sonido_offNocTres.addEventListener("click",()=>{
    nocTres.pause();
})

sonido_onLick.addEventListener("click",()=>{
    lick.play();
})
sonido_offLick.addEventListener("click",()=>{
    lick.pause();
})

sonido_onSolsium.addEventListener("click",()=>{
    solsium.play();
})
sonido_offSolsium.addEventListener("click",()=>{
    solsium.pause();
})

sonido_onSolsiumII.addEventListener("click",()=>{
    solsiumII.play();
})
sonido_offSolsiumII.addEventListener("click",()=>{
    solsiumII.pause();
})

sonido_onImp.addEventListener("click",()=>{
    imp.play();
})
sonido_offImp.addEventListener("click",()=>{
    imp.pause();
})

sonido_onAlgunas.addEventListener("click",()=>{
    algunas.play();
})
sonido_offAlgunas.addEventListener("click",()=>{
    algunas.pause();
})

sonido_onDoby.addEventListener("click",()=>{
    doby.play();
})
sonido_offDoby.addEventListener("click",()=>{
  doby.pause();
})

sonido_onMar.addEventListener("click",()=>{
    mar.play();
})
sonido_offMar.addEventListener("click",()=>{
  mar.pause();
})
sonido_onMorir.addEventListener("click",()=>{
    morir.play();
})
sonido_offMorir.addEventListener("click",()=>{
  morir.pause();
})


let nav = document.querySelector("#navbar")
let menuHam = document.querySelector("#ham")

menuHam.addEventListener("click",()=>{
    nav.classList.toggle("visible")
})
