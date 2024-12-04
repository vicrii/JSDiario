// necesito crear instancias de carrito
// cargar el carrito del localStorage

import Carrito from "./components/Carrito";
const carrito = new Carrito()
carrito.cargarCarrito();

//Crear un h1 con CREATE ELEMENT
//crear un contenedor form, inputs para nombre, cantidad, precio con INNER HTML
//crear boton de añadir al carrito


//funciones

const renderListaCarrito = () =>{
    //capturamos el ul

    const lista = document.getElementById("lista-productos");
    const totalCarrito = document.getElementById("total-carrito");
    lista.innerHTML = carrito.productos.map((producto, index)=>{
        return `
            <li data-id="${index}">
                ${producto.obtenerInfo()}
                <button class="btn-editar" data-id="${index}">Editar</button>
                <button class="btn-borrar" data-id="${index}">Borrar</button>
            </li>
        `;
    }).join();

    //Poner total
    totalCarrito.textContent = carrito.calcularTotal();
    carrito.guardarLocalStorage();
}

const agregarProductoHandler = (event) => {
    
    // Evitar que se recarge la pagina
    event.preventDefault();
    const nombre = document.getElementById('nombre-producto').value.trim();
    const cantidad = Number(document.getElementById('cantidad-producto').value);
    const precio = Number(document.getElementById('precio-producto').value);

    if(nombre && cantidad > 0  && precio > 0){
        carrito.agregarProducto(nombre, cantidad, precio);

        //para renderizar y pintar recorro el array de carritos y cada elemento se pinta en li
        renderListaCarrito()
        console.log(carrito);
    }else{
        alert("Error al reproducir los valores");
    }
    event.target.reset();
}
const manejarAccionesHandler = (event) => {
    const indice= Number(event.target.dataset.id);
    if(event.target.classList.contains("btn-borrar")){
        carrito.borrarProducto(indice);
        renderListaCarrito();
    }
    if(event.target.classList.contains("btn-editar")){
        const newCantidad = Number(prompt("Introduce la nueva cantidad", carrito.productos[indice].cantidad));
        if(newCantidad && newCantidad > 0){
            carrito.editarProducto(indice, newCantidad);
            renderListaCarrito();
        }
    }
}
function init() {
    const app = document.getElementById('app');
    const h1 = document.createElement('h1');
    h1.textContent = 'Mi Carrito';
    app.appendChild(h1);
    
    // Cambiar innerHTML a appendChild para evitar sobrescribir
    const form = document.createElement('form');
    form.id = "form-producto";
    form.innerHTML = `
        <input type="text" placeholder="Nombre del producto" id="nombre-producto">
        <input type="number" placeholder="Escribe la cantidad" id="cantidad-producto">
        <input type="number" placeholder="Precio del producto" id="precio-producto">
        <button id="btn-agregar">Agregar al carrito</button>
    `;
    app.appendChild(form);
    
    const container = document.createElement('div');
    container.id = "container-productos";
    container.innerHTML = `<ul id="lista-productos"></ul>`;
    app.appendChild(container);
    
    const footer = document.createElement('footer');
    footer.innerHTML = `<p>Total del carrito: <strong id="total-carrito">0</strong></p>`;
    app.appendChild(footer);
    
    // Capturamos eventos
    document
        .getElementById("form-producto")
        .addEventListener("submit", agregarProductoHandler);
    
    document
        .getElementById("lista-productos")
        .addEventListener("click", manejarAccionesHandler);
    
    renderListaCarrito();
}

// Llamar a init para inicializar la aplicación
init();