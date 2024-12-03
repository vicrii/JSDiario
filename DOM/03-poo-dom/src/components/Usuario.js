export function Usuario(nombre, email, password) {
    this.nombre = nombre;
    this.email = email;
    let _password = password;
    // metodos
    this.login = function(email, password) {
        if (email === this.email && password === _password) {
            return `Bienvenido ${this.nombre}`;
        } else {
            return `Error en el login`;
        }
    }
    // actualizar el email
    this.updateEmail = function(nuevoEmail) {
        this.email = nuevoEmail;
        return `Email actualizado a ${nuevoEmail}`;
    }
    this.getInfo = function() {
        return `Nombre: ${this.nombre}, Email: ${this.email}`;
    }
}