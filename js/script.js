//COMPRAS

const bicicletas = [{
    "id": 1,
    marca: "Vairo",
    color: "verde, cian, negro",
    rodado: "29",
    precio: "78000",
    imagen : "assets/bicicleta1.webp"
},
{
    "id": 2,
    marca: "Trek",
    color: "azul",
    rodado: "29",
    precio: "65000",
    imagen : "assets/Trek-azul-29.jpg"
},
{
    "id": 3,
    marca: "Trek",
    color: "roja",
    rodado: "29",
    precio: "65000",
    imagen : "assets/Trek-roja-29.jpg"
},
{
    "id": 4,
    marca: "Vairo/metro",
    color: "blanca",
    rodado: "26",
    precio: "83000",
    imagen : "assets/Vairo-Metro_Blanca-26.webp"
},
{
    "id": 5,
    marca: "Vairo",
    color: "gris, negro, verde",
    rodado: "26",
    precio: "45000",
    imagen : "assets/Vairo-gris-negro-verde-26.jpg"
},
{
    "id": 6,
    marca: "Scott",
    color: "celeste",
    rodado: "29",
    precio: "77000",
    imagen : "assets/Scott-celeste-29.png"
},
{
    "id": 7,
    marca: "FireBird",
    color: "naranja",
    rodado: "29",
    precio: "71000",
    imagen : "assets/FireBird_naranja-29.jpg"
},
{
    "id": 8,
    marca: "FireBird",
    color: "negra",
    rodado: "29",
    precio: "71000",
    imagen : "assets/FireBird_negra-29.jpg"
},
{
    "id": 9,
    marca: "Scott",
    color: "amarilla",
    rodado: "29",
    precio: "77000",
    imagen : "assets/Scott-amarilla-29.png"
},
{
    "id": 10,
    marca: "Raleigh",
    color: "roja",
    rodado: "29",
    precio: "82000",
    imagen : "assets/Raleigh-roja-29.jpg"
},
{
    "id": 11,
    marca: "Scott",
    color: "negra",
    rodado: "29",
    precio: "77000",
    imagen : "assets/Scott-negra-29.png"
},
{
    "id": 12,
    marca: "Raleigh",
    color: "blanca",
    rodado: "26",
    precio: "41000",
    imagen : "assets/Raleigh-blanca-26.webp"
},
{
    "id": 13,
    marca: "Moove",
    color: "verde",
    rodado: "29",
    precio: "68000",
    imagen : "assets/Moove-verde-29.jpg"
},
{
    "id": 14,
    marca: "Raleigh",
    color: "azul",
    rodado: "29",
    precio: "82000",
    imagen : "assets/Raleigh-azul-29.jpg"
},
{
    "id": 15,
    marca: "Moove",
    color: "azul, negra",
    rodado: "29",
    precio: "68000",
    imagen : "assets/Moove-azul-negra-29.jpg"
},
{
    "id": 16,
    marca: "Vairo",
    color: "negra, naranja",
    rodado: "29",
    precio: "78000",
    imagen : "assets/Vairo-negro-naranja-29.jpg"
},
{
    "id": 17,
    marca: "Vairo",
    color: "negra, verde",
    rodado: "29",
    precio: "78000",
    imagen : "assets/Vairo-negro-verde-29.webp"
},
{
    "id": 18,
    marca: "Raleigh",
    color: "negra, roja",
    rodado: "29",
    precio: "82000",
    imagen : "assets/Raleigh-negra-roja-29.jpg"
},
{
    "id": 19,
    marca: "FireBird",
    color: "negra, verde",
    rodado: "29",
    precio: "71000",
    imagen : "assets/FireBird_negro-verde-29.jpg"
},
{
    "id": 20,
    marca: "FireBird",
    color: "roja",
    rodado: "26",
    precio: "38000",
    imagen : "assets/FireBird_roja-26.jpg"
},
{
    "id": 21,
    marca: "Moove",
    color: "azul, negra",
    rodado: "29",
    precio: "68000",
    imagen : "assets/Moove-azul-negra-29.jpg"
}
]

const nuevaBicicleta = {
    "id": 22,
    marca: "Volta",
    color: "blanca",
    rodado: "29",
    precio: "135000",
    imagen: "assets/Volta-blanca-29.jpg"
}

bicicletas.push(nuevaBicicleta);

const contenedorProductos = document.querySelector('#contenedor-productos');

const formulario = document.querySelector("#formulario")
const boton = document.querySelector("#btn-form")
const catalogo = document.querySelector("#catalogo")

let botonesAgregar = document.querySelectorAll('.producto-agregar')

const numerito = document.querySelector('#numerito');




const filtrar = () => {
    contenedorProductos.innerHTML = '';

    const texto = formulario.value.toLowerCase();

    for(let bicicleta of bicicletas){
        let nombre = bicicleta.marca.toLowerCase();
        let nombreColor = bicicleta.color.toLowerCase();
        let nombreRodado = bicicleta.rodado.toLowerCase();
        let nombrePrecio = bicicleta.precio.toLowerCase();

        if(nombre.indexOf(texto) !== -1 || nombreColor.indexOf(texto) !== -1 || nombreRodado.indexOf(texto) !== -1 || nombrePrecio.indexOf(texto) !== -1){
            contenedorProductos.innerHTML += 
            `<div class="producto">
                <img class="producto-imagen" src="${bicicleta.imagen}" alt="Imagen de ${bicicleta.marca}">
                <div class="producto-detalles">
                    <h3 class="producto-marca">${bicicleta.marca}</h3>
                    <p class="producto-color">${bicicleta.color}</p>
                    <p class="producto-rodado">${bicicleta.rodado}</p>
                    <p class="producto-precio">$${bicicleta.precio}</p>
                    <button class="producto-agregar" id=${bicicleta.id}>Agregar</button>     
                </div>
            </div>`
        }
    }
    if(contenedorProductos.innerHTML === ''){
        contenedorProductos.innerHTML += `
            <li>No se encontro ningun producto...</li>
        `
    }
    actualizarBotonesAgregar();
}

const ordenar = (orden) => {
    if(orden === 'asc'){
        bicicletas.sort((a, b) => a.precio - b.precio);
    }else if (orden === 'desc'){
        bicicletas.sort((a, b) => b.precio - a.precio);
    }
    filtrar();
}

const botonOrden = document.querySelector('#boton-orden');
let ordenActual = 'asc';

botonOrden.addEventListener('change', () =>{
    if (ordenActual === 'asc'){
        ordenar('desc');
        ordenActual = 'desc';
    }else{
        ordenar('asc');
        ordenActual = 'asc';
    }
})

boton.addEventListener("click", filtrar)
formulario.addEventListener("keyup", filtrar)

filtrar();


let guardarBicicletas = (clave, valor) => {localStorage.setItem(clave,valor)}

guardarBicicletas("listaBicicletas", JSON.stringify(bicicletas))


function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll('.producto-agregar');

    botonesAgregar.forEach(boton =>{
        boton.addEventListener('click', agregarAlCarrito);
    });
}


let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
}else{
    productosEnCarrito =[];
}



function agregarAlCarrito (e){
    const idBoton = parseInt(e.currentTarget.id);
    const productosAgregados = bicicletas.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productosAgregados.cantidad = 1;
        productosEnCarrito.push(productosAgregados);
    }

    actualizarNumerito();


    localStorage.setItem("producto-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito(){
    let numeroCarro = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = numeroCarro;
}

