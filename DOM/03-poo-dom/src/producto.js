export class Producto {
    constructor(nombre, precio, stock, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }

    getInfo() {
        return `Nombre: ${this.nombre}, Precio: ${this.precio}, Stock: ${this.stock}`;
    }

    actualizarStock(cantidad) {
        if (cantidad + this.stock > 0) {
            this.stock += cantidad;
            return `Stock actualizado: ${this.stock}`;
        } else {
            return `Cantidad inválida`;
        }
    }
}

