const botonLimpiar = document.querySelector('#boton-limpiar');

function limpiarInputs(evento){
    evento.preventDefault();

    console.log("Boton cliqueado");
    document.querySelector("#nombreProducto").value = "";
    document.querySelector("#precioProducto").value = "";
    document.querySelector("#urlImagen").value = "";
    window.location.href = "./index.html";
}


botonLimpiar.addEventListener('click', evento => limpiarInputs(evento));