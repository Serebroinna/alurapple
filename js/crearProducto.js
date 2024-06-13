import { conexionApi } from "./conexionApi.js";
const sectionCard = document.querySelector(".section__productos");
const botonEnviar = document.querySelector("#boton-enviar");

async function crearProducto(evento){
    evento.preventDefault();

    const nombre = document.querySelector("#nombreProducto").value;
    const precio = document.querySelector("#precioProducto").value;
    const imagen = document.querySelector("#urlImagen").value;


    try{
        if(!nombre=="" && !precio=="" && !imagen==""){
            await conexionApi.postProductos(nombre,precio,imagen);
            window.location.href = "./index.html";
        }else{
            alert("Por favor llene los campos");
        }
    }catch(e){
        sectionCard.innerHTML = "<h1>Error con la conexion a la base de datos :(</h1>";
    } 
}

botonEnviar.addEventListener("click", evento => crearProducto(evento));

