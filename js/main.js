// let sonido_on = document.querySelector(".sonido");
// let sonido_off = document.querySelector(".sonido_mute");
// let sonido_onNocUno = document.querySelector(".sonidoNocUno");
// let sonido_offNocUno = document.querySelector(".sonido_muteNocUno");
// let sonido_onNocDos = document.querySelector(".sonidoNocDos");
// let sonido_offNocDos = document.querySelector(".sonido_muteNocDos");
// let sonido_onNocTres = document.querySelector(".sonidoNocTres");
// let sonido_offNocTres= document.querySelector(".sonido_muteNocTres");
// let sonido_onLick = document.querySelector(".sonidoLick");
// let sonido_offLick = document.querySelector(".sonido_muteLick");
// let sonido_onSolsium = document.querySelector(".sonidoSolsium");
// let sonido_offSolsium = document.querySelector(".sonido_muteSolsium");
// let sonido_onSolsiumII = document.querySelector(".sonidoSolsiumII");
// let sonido_offSolsiumII = document.querySelector(".sonido_muteSolsiumII");
// let sonido_onImp = document.querySelector(".sonidoImp");
// let sonido_offImp = document.querySelector(".sonido_muteImp");
// let sonido_onAlgunas = document.querySelector(".sonidoAlgunas");
// let sonido_offAlgunas = document.querySelector(".sonido_muteAlgunas");
// let sonido_onDoby = document.querySelector(".sonidoDoby");
// let sonido_offDoby = document.querySelector(".sonido_muteDoby");
// let sonido_onMar = document.querySelector(".sonidoMar");
// let sonido_offMar = document.querySelector(".sonido_muteMar");
// let sonido_onMorir = document.querySelector(".sonidoMorir");
// let sonido_offMorir = document.querySelector(".sonido_muteMorir");
// let girasoles = document.querySelector(".girasoles");
// let nocUno = document.querySelector(".nocUno");
// let nocDos = document.querySelector(".nocDos");
// let nocTres = document.querySelector(".nocTres");
// let lick = document.querySelector(".lick");
// let solsium = document.querySelector(".solsium");
// let solsiumII = document.querySelector(".solsiumII");
// let imp = document.querySelector(".imp");
// let algunas = document.querySelector(".algunas");
// let doby = document.querySelector(".doby");
// let mar = document.querySelector(".mar");
// let morir = document.querySelector(".morir");

// sonido_on.addEventListener("click",()=>{
//     girasoles.play();
// })
// sonido_off.addEventListener("click",()=>{
//     girasoles.pause();
// })

// sonido_onNocUno.addEventListener("click",()=>{
//     nocUno.play();
// })
// sonido_offNocUno.addEventListener("click",()=>{
//     nocUno.pause();
// })

// sonido_onNocDos.addEventListener("click",()=>{
//     nocDos.play();
// })
// sonido_offNocDos.addEventListener("click",()=>{
//     nocDos.pause();
// })


// sonido_onNocTres.addEventListener("click",()=>{
//     nocTres.play();
// })
// sonido_offNocTres.addEventListener("click",()=>{
//     nocTres.pause();
// })

// sonido_onLick.addEventListener("click",()=>{
//     lick.play();
// })
// sonido_offLick.addEventListener("click",()=>{
//     lick.pause();
// })

// sonido_onSolsium.addEventListener("click",()=>{
//     solsium.play();
// })
// sonido_offSolsium.addEventListener("click",()=>{
//     solsium.pause();
// })

// sonido_onSolsiumII.addEventListener("click",()=>{
//     solsiumII.play();
// })
// sonido_offSolsiumII.addEventListener("click",()=>{
//     solsiumII.pause();
// })

// sonido_onImp.addEventListener("click",()=>{
//     imp.play();
// })
// sonido_offImp.addEventListener("click",()=>{
//     imp.pause();
// })

// sonido_onAlgunas.addEventListener("click",()=>{
//     algunas.play();
// })
// sonido_offAlgunas.addEventListener("click",()=>{
//     algunas.pause();
// })

// sonido_onDoby.addEventListener("click",()=>{
//     doby.play();
// })
// sonido_offDoby.addEventListener("click",()=>{
//   doby.pause();
// })

// sonido_onMar.addEventListener("click",()=>{
//     mar.play();
// })
// sonido_offMar.addEventListener("click",()=>{
//   mar.pause();
// })
// sonido_onMorir.addEventListener("click",()=>{
//     morir.play();
// })
// sonido_offMorir.addEventListener("click",()=>{
//   morir.pause();
// })

const sounds = {
    girasoles: document.querySelector(".girasoles"),
    nocUno: document.querySelector(".nocUno"),
    nocDos: document.querySelector(".nocDos"),
    nocTres: document.querySelector(".nocTres"),
    lick: document.querySelector(".lick"),
    solsium: document.querySelector(".solsium"),
    solsiumII: document.querySelector(".solsiumII"),
    imp: document.querySelector(".imp"),
    algunas: document.querySelector(".algunas"),
    doby: document.querySelector(".doby"),
    mar: document.querySelector(".mar"),
    morir: document.querySelector(".morir"),
};

const soundButtons = {
    sonido_on: document.querySelector(".sonido"),
    sonido_off: document.querySelector(".sonido_mute"),
    sonido_onNocUno: document.querySelector(".sonidoNocUno"),
    sonido_offNocUno: document.querySelector(".sonido_muteNocUno"),
    sonido_onNocDos: document.querySelector(".sonidoNocDos"),
    sonido_offNocDos: document.querySelector(".sonido_muteNocDos"),
    sonido_onNocTres: document.querySelector(".sonidoNocTres"),
    sonido_offNocTres: document.querySelector(".sonido_muteNocTres"),
    sonido_onLick: document.querySelector(".sonidoLick"),
    sonido_offLick: document.querySelector(".sonido_muteLick"),
    sonido_onSolsium: document.querySelector(".sonidoSolsium"),
    sonido_offSolsium: document.querySelector(".sonido_muteSolsium"),
    sonido_onSolsiumII: document.querySelector(".sonidoSolsiumII"),
    sonido_offSolsiumII: document.querySelector(".sonido_muteSolsiumII"),
    sonido_onImp: document.querySelector(".sonidoImp"),
    sonido_offImp: document.querySelector(".sonido_muteImp"),
    sonido_onAlgunas: document.querySelector(".sonidoAlgunas"),
    sonido_offAlgunas: document.querySelector(".sonido_muteAlgunas"),
    sonido_onDoby: document.querySelector(".sonidoDoby"),
    sonido_offDoby: document.querySelector(".sonido_muteDoby"),
    sonido_onMar: document.querySelector(".sonidoMar"),
    sonido_offMar: document.querySelector(".sonido_muteMar"),
    sonido_onMorir: document.querySelector(".sonidoMorir"),
    sonido_offMorir: document.querySelector(".sonido_muteMorir"),
};
let currentSound = null;

function setupSoundToggle(onButton, offButton, sound) {
    onButton.addEventListener("click", () => {
        if (currentSound && currentSound !== sound) {
            currentSound.pause(); 
        }
        currentSound = sound; 
        sound.play();
    });

    offButton.addEventListener("click", () => {
        if (currentSound === sound) {
            sound.pause();
            currentSound = null; 
        }
    });
}

setupSoundToggle(soundButtons.sonido_on, soundButtons.sonido_off, sounds.girasoles);
setupSoundToggle(soundButtons.sonido_onNocUno, soundButtons.sonido_offNocUno, sounds.nocUno);
setupSoundToggle(soundButtons.sonido_onNocDos, soundButtons.sonido_offNocDos, sounds.nocDos);
setupSoundToggle(soundButtons.sonido_onNocTres, soundButtons.sonido_offNocTres, sounds.nocTres);
setupSoundToggle(soundButtons.sonido_onLick, soundButtons.sonido_offLick, sounds.lick);
setupSoundToggle(soundButtons.sonido_onSolsium, soundButtons.sonido_offSolsium, sounds.solsium);
setupSoundToggle(soundButtons.sonido_onSolsiumII, soundButtons.sonido_offSolsiumII, sounds.solsiumII);
setupSoundToggle(soundButtons.sonido_onImp, soundButtons.sonido_offImp, sounds.imp);
setupSoundToggle(soundButtons.sonido_onAlgunas, soundButtons.sonido_offAlgunas, sounds.algunas);
setupSoundToggle(soundButtons.sonido_onDoby, soundButtons.sonido_offDoby, sounds.doby);
setupSoundToggle(soundButtons.sonido_onMar, soundButtons.sonido_offMar, sounds.mar);
setupSoundToggle(soundButtons.sonido_onMorir, soundButtons.sonido_offMorir, sounds.morir);




let nav = document.querySelector("#navbar")
let menuHam = document.querySelector("#ham")
let main = document.querySelector("main");
let foot = document.querySelector("footer");

menuHam.addEventListener("click",()=>{
    nav.classList.toggle("visible")
    main.classList.toggle("mainOpa")
    foot.classList.toggle("mainOpa")
})
