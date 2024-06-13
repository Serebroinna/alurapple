const url = "https://fake-api-tau-five.vercel.app/productos";

// GET
async function getProductos(){
    const productos = await fetch("https://fake-api-tau-five.vercel.app/productos");
    const productosParse = productos.json();
    return productosParse;
}

// POST
async function postProductos(nombre,precio,imagen){
    const productos = await fetch(url,{
        method: "POST",
        headers: {"Content-type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
        })
    })
}


// DELETE 
async function deleteProductos(id){
    await fetch(`https://fake-api-tau-five.vercel.app/productos/${id}`, {
        method: "DELETE",
        headers: {"Content-Type":"application/json"}
    });
}




export const conexionApi = {
    getProductos,postProductos,deleteProductos
};