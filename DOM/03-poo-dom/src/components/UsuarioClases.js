export class Usuario {
    #password; // propiedad privada
    
    constructor(nombre, email, password) {
        this.nombre = nombre;
        this.email = email;
        this.#password = password;
    }
    login(email, password) {
        if (email === this.email && password === this.#password) {
            return `Bienvenido ${this.nombre}`;
        } else {
            return `Error en el login`;
        }
    }       
    updateEmail(nuevoEmail) {
        this.email = nuevoEmail;
        return `Email actualizado a ${nuevoEmail}`;
    }
}