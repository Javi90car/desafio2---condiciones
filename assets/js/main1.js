//javascript desafio condiciones parte2


const textDinamic = document.querySelector("#textDinamic")
const btnpart2 = document.querySelector("#btnpart2")
const stickerHomer = document.querySelector("#stickerHomer")
const stickerLisa = document.querySelector("#stickerLisa")
const stickerBart = document.querySelector("#stickerBart")


btnpart2.addEventListener("click",()=>{
    const resultado = parseInt(stickerHomer.value) + parseInt(stickerLisa.value) + parseInt(stickerBart.value);
    if(resultado > 10){
        textDinamic.innerHTML = "Llevas demasiados stickers";
        return
    }
    if(resultado <= 10){
        textDinamic.innerHTML = `Llevas ${resultado} stickers`;
        return
    }
})