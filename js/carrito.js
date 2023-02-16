let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");

function cargarProductosCarrito(){
    if (productosEnCarrito && productosEnCarrito.length > 0){
 

    contenedorCarritoProductos.innerHTML = '';

    productosEnCarrito.forEach(producto =>{
        const div = document.createElement("div");
        div.classList.add("carrito-producto");
        div.innerHTML =`
            <img class="carrito-producto-imagen" src="${bicicleta.imagen}" alt="${bicicleta.marca}">
            <div class="carrito-producto-titulo">
                <small>Marca</small>
                <h3>${bicicleta.marca}</h3>
            </div>
            <div class="carrito-producto-color">
                <small>Color</small>
                <p>${bicicleta.color}</p>
            </div>
            <div class="carrito-producto-rodado">
                <small>Rodado</small>
                <p>${bicicleta.rodado}</p>
            </div>
            <div class="carrito-producto-precio">
                <small>Precio</small>
                <p>${bicicleta.precio}</p>
            </div>
            <button class="carrito-producto-eliminar" id="${bicicleta.id}"><i class="bi bi-trash-fill"></i></button>
        `

    })

    
    }else {

        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }

    actualizarBotonesEliminar();
}

cargarProductosCarrito();



function actualizarBotonesEliminar(){
    botonesEliminar = document.querySelectorAll('.carrito-botones-eliminar');

    botonesEliminar.forEach(boton =>{
        boton.addEventListener('click', eliminarDelCarrito);
    });
}


function eliminarDelCarrito (){
    const idBoton = parseInt(e.currentTarget.id);

    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index, 1)
    
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito));

}

botonVaciar.addEventListener('click', vaciarCarrito);

function vaciarCarrito(){
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

function actualizarTotal (){
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;

}


botonComprar.addEventListener('click', comprarCarrito);

function comprarCarrito(){
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");
}