export function Tarea(nombre){
    // propiedades estaticas
    Tarea.contador = 1;
    // propiedades privadas
    // propiedades publicas

    this.id= Tarea.contador++;
    this.nombre = nombre;
    this.completada = false;

    // metodos publicos 
    this.toggleCompletada = function() {
        this.completada= !this.completada;
    }
    this.logEstado = function() {
        console.log(`La tarea ${this.nombre} esta ${this.completada} ? "completada" : "no completada"`);
    }
    // crear un metodo estatico 
    Tarea.prototype.info = function() {
        console.log(`Tarea: ${this.nombre} - Id: ${this.id} - Completada: ${this.completada}`);
    }
}
export class TareaClass {
     #completada;
     constructor(nombre){
        this.id= TareaClass.contador++;
        this.nombre = nombre;
        this.#completada = false;
    }
    // metodos publicos
    toggleCompletada(){
        this.#completada= !this.#completada;
    }
    info(){
        console.log(`Tarea: ${this.nombre} - Id: ${this.id} - Completada: ${this.#completada}`);
    }
}