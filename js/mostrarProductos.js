import { conexionApi } from "./conexionApi.js";
const sectionCard = document.querySelector(".section__productos");

async function mostrarProductos (){
    try{
        const productos = await conexionApi.getProductos();
        if(!productos == ""){
            productos.forEach(producto => {
                crearCard(producto.imagen,producto.nombre,producto.precio,producto.id);
            })
        }else{
            sectionCard.innerHTML = "<h1>No hay productos para mostrar</h1>"
        }  
    }catch(e){
        sectionCard.innerHTML = "<h1 data-errorbd >Error con la conexion a la base de datos :(</h1>"
    }
}

function crearCard(imagen,nombre,precio,id){
        // Creamos un div para cada card de producto
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
            <img src="${imagen}" id="img__producto" />
            <div class="card-container--info">
                <p>${nombre}</p>
                <div class="card-container--value">
                    <p>$ ${precio} mxn</p>
                    <button type="button" style="cursor:pointer" class="boton__borrar" data-id="${id}"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>`
        sectionCard.appendChild(div);
}


mostrarProductos();



