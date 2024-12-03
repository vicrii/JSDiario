// implementar un perfil de login y actualizacion del perfil usando 
// poo
    // objetivo: crear una CLASE u OBJETO para modelar el login / perfil

import { Producto } from "./producto.js";
const productos = [
    new Producto("Producto 1", 100, 10, "url_imagen_1"),
    new Producto("Producto 2", 200, 5, "url_imagen_2"),
];
import { Usuario } from "./components/Usuario.js";
const usuario = new Usuario("Juan", "juan@gmail.com", "123456");
const app = document.getElementById("app");
app.innerHTML = `
    <h2>Gestion de usuario</h2>
    <p>${usuario.getInfo()}</p>
    <button id="btn-login">Login</button>
    <button id="btn-update-email">Actualizar Email</button>
    <div id="form-container"></div>
`
const buttonLogin = document.getElementById("btn-login");    

// Definir la función antes de usarla
const mostrarFormularioLogin = () => {
    document.getElementById("form-container").innerHTML = `
        <input type="email" id="email" required placeholder="Ingrese su email">
        <input type="password" id="password" required placeholder="Ingrese su contraseña">
        <button id="btn-enviar-login" type="submit">Iniciar sesión</button>
    `;  
    document.getElementById("btn-enviar-login").addEventListener("click", () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        alert(usuario.login(email, password));
    });
}
const mostrarFormularioActualizarEmail = () => {
    document.getElementById("form-container").innerHTML = `
        <input type="email" id="email" required placeholder="Ingrese su email"></input>
        <button id="btn-actualizar-email" type="submit">Actualizar Email</button>
    `;
    document.getElementById("btn-actualizar-email").addEventListener("click", () => {
        const email = document.getElementById("email").value;
        alert(usuario.updateEmail(email));
    });
}
buttonLogin.addEventListener("click", mostrarFormularioLogin); 

const buttonUpdateEmail = document.getElementById("btn-update-email");
buttonUpdateEmail.addEventListener("click", mostrarFormularioActualizarEmail); 

const renderizarProductos = () => {
    const productosContainer = document.createElement("ul");
    productos.forEach(producto => {
        const productoLi = document.createElement("li");
        productoLi.innerHTML = `
            <h3>${producto.getInfo()}</h3>
            <input type="number" id="cantidad-${producto.nombre}" placeholder="Cantidad">
            <button id="btn-actualizar-stock-${producto.nombre}">Actualizar Stock</button>
        `;
        productosContainer.appendChild(productoLi);

        document.getElementById(`btn-actualizar-stock-${producto.nombre}`).addEventListener("click", () => {
            const cantidad = document.getElementById(`cantidad-${producto.nombre}`).value;
            alert(producto.actualizarStock(cantidad));
        });
    });
    app.appendChild(productosContainer);
}
renderizarProductos();
// gestion productos: nombre, precio, stock, imagen o url
// metodos:  getInfo, actualizarStock(cantidad)
// genera arr productos, renderizar en el dom, añadir un boton para actualizar stock
// debe aparecer privado con un list

// 3 IMPLEMENTAR UNA CLASE LLAMADA CUENTA BANCARIA QUE TENGA UNA PROPIEDAD PRIVADA Y permita actualizar cantidad
// 2 contenedores: uno para actualizar con un radio button y otro para mostrar el saldo




