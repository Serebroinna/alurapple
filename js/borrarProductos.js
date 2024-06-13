import { conexionApi } from "./conexionApi.js";
const sectionCard = document.querySelector(".section__productos");

async function borrarProducto (idProducto){
    try{
        await conexionApi.deleteProductos(idProducto);
        window.location.href = "./index.html";
    }catch(e){
        sectionCard.innerHTML = "<h1>Error con la conexion a la base de datos :(</h1>"
    }
}

sectionCard.addEventListener("click", () => {
    const btnBorrar = event.target.closest(".boton__borrar"); // Aqui escucha si el evento de click fue en el boton de borrar
    if(btnBorrar){
        const idProducto = btnBorrar.dataset.id;
        borrarProducto(idProducto);
    }
});
