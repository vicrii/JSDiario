import { Producto } from "./Producto.js";

export default class Carrito {
    constructor(){
        this.productos = [];
    }

    agregarProducto(nombre, cantidad, precio){
        this.productos.push(new Producto(nombre, cantidad, precio));
    }

    borrarProducto(index){
        this.productos.splice(index, 1);
    }

    editarProducto(index, newCantidad){
        if(newCantidad => 0){
            this.productos[index].cantidad = newCantidad;
        }
    }

    calcularTotal(){
       return this.productos.reduce((total, producto) => total + producto.calcularTotal(), 0);
    }

    guardarLocalStorage(){
        localStorage.setItem('carrito', JSON.stringify(this.productos));
    }

    cargarCarrito(){
        const carrito = JSON.parse(localStorage.getItem('carrito'));
        if(carrito){
            this.productos = carrito.map((producto) => new Producto(producto.nombre, producto.precio, producto.cantidad));
        }
    }
}