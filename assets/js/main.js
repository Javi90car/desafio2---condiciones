//javascript desafio condiciones parte 1
const imagen = document.querySelector("img")
imagen.style.cursor = "pointer";


imagen.addEventListener ("click", () => {

    imagen.classList.toggle("border");
})

