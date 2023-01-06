const ingresar = document.querySelector("#ingresar")
const pass1 = document.querySelector("#pass1")
const pass2 = document.querySelector("#pass2")
const pass3 = document.querySelector("#pass3")
const textPass = document.querySelector("#textPass")

ingresar.addEventListener("click",()=>{
    const resultado = pass1.value + pass2.value + pass3.value;
    if(resultado === '911'){
        textPass.innerHTML = "Password 1 correcto";
        return
    }

    if(resultado === '714'){
        textPass.innerHTML = "Password 2 correcto";
        return
    }else{
        textPass.innerHTML = "Password incorrecto"
    }
  
})