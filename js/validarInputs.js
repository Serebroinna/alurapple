import {tiposError, mensajes } from "./customErrors.js";
const inputs = document.querySelectorAll(".input__form");


inputs.forEach(input => {
    input.addEventListener("blur",()=>{
        validar(input);
    })
});

function validar(input){
    const mensajeError = input.parentNode.querySelector(".mensaje-error");
    let mensaje = "";
    mensajeError.innerHTML = "";
    input.setCustomValidity("");


    tiposError.forEach(error => {
        if(input.validity[error]){
            mensaje = mensajes[input.name][error];
            mensajeError.innerHTML = mensaje;
        }  
    });

    
}