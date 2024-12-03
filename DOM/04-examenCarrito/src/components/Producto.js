export default class Producto {
    constructor(nombre, cantidad, precio) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    getInfo() {
        return `Nombre: ${this.nombre}, Cantidad: ${this.cantidad}, Precio: ${this.precio}, Total: ${this.getTotal()}`;
    }
    getTotal() {
        return this.cantidad * this.precio;
    }
    setCantidad(newCantidad) {
        this.cantidad = newCantidad;
    }
    guardarLocalStorage() {
        localStorage.setItem("Carrito", JSON.stringify(this.productos));
    }

    
}