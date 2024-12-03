// crear un form para validad correo
// si no es correcto muestra error dinamico bajo el input

import createDivForm from "./components/divForm.js";

document.addEventListener("DOMContentLoaded", () => {
    // crear contenedor para el form
    const app = document.getElementById("app");
    const divForm = createDivForm();
    app.appendChild(divForm);
});


// dado un arr objetos crear una tabla dinamicamente en la que cada fila conrresponda a un usuario. Añade funcionalidad para 
// ordenar por nombre, apellido y correo, haciendo click en el encabezado de cada columna.

// utilizando la lista de usuarios añadir un input para que a medida que busquemos filtre en tiempo real por su nombre.

