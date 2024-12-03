import Producto from "./Producto.js";

export default class Carrito {
    constructor() {
        this.productos = [];    
    }
    agregarProducto(nombre, cantidad, precio) {
        this.productos.push(new Producto(nombre, cantidad, precio));
        // guardar en el localStorage
    }
    borrarProducto(indice) {
        this.productos.splice(indice, 1);
    }
    editarProducto(index, newCantidad) {
        if(newCantidad > 0) {
            this.productos[index].setCantidad(newCantidad);
            // guardar en el localStorage
        }
    }
    calcularTotal() {
        return this.productos.reduce((total, producto) => total + producto.getTotal(), 0);
    }
    cargarLocalStorage() {
        if(localStorage.hasOwnProperty("Carrito")) {   
            const productos = JSON.parse(localStorage.getItem("Carrito"));
            productos.forEach(producto => {
                this.agregarProducto(new Producto(producto.nombre, producto.cantidad, producto.precio));
            });
        }
    }
    // ordenar por nombre
    ordenarPorNombre() {
    }
    ordernarPorPrecio() {
    }    
}