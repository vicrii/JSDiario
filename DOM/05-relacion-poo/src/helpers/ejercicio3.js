export function Empleado(nombre, edad, puesto){
    this.nombre = nombre;
    this.edad = edad;
    this.puesto = puesto;
    Empleado.prototype.calcularSalario = function() {
        return {
            junior: 1500,
            senior: 2500,
            master: 5000
        };
        return salarios[this.puesto];
    // salario compartido para la clase   
}