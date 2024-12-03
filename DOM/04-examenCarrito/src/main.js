// crear una instancia de carrito
import Carrito from "./components/Carrito.js";
import Producto from "./components/Producto.js";
const carrito = new Carrito();
carrito.cargarLocalStorage();

// crear h1  -- carrito
const h1 = document.createElement("h1");
h1.textContent = "Carrito";
document.body.appendChild(h1);

// crear un <form>
const form = document.createElement("form");
form.innerHTML = `
    <input type="text" name="nombre" placeholder="Nombre">
    <input type="number" name="cantidad" placeholder="Cantidad">
    <input type="number" name="precio" placeholder="Precio">
    <button type="submit">Agregar</button>    
`;
document.body.appendChild(form);
form.addEventListener("submit", function(evento) {
    evento.preventDefault();
    const nombre = form.nombre.value;
    const cantidad = Number(form.cantidad.value);
    const precio = Number(form.precio.value);
    if (nombre === "" || cantidad === 0 || precio === 0) {
        alert("Por favor, complete todos los campos");
    }
    const producto = new Producto(nombre, cantidad, precio);

    carrito.agregarProducto(producto);
    form.reset();
    renderizarProductos(); // Llama a la función para actualizar la visualización
});
document.body.appendChild(form);

// añadir div para colocar el array de los productos del carrito
const divProductos = document.createElement("div");
document.body.appendChild(divProductos);


// Función para renderizar los productos
function renderizarProductos() {
    divProductos.innerHTML = ''; // Limpia el contenido anterior
    divProductos.innerHTML += '<ul>'; // Abre la lista
    carrito.productos.forEach(producto => {
        divProductos.innerHTML += `
            <li>${producto.nombre} - ${producto.cantidad} - ${producto.precio}</li>
        `;
    });
    divProductos.innerHTML += '</ul>'; // Cierra la lista
}

// Renderiza los productos inicialmente
renderizarProductos();



