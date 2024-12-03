// // seleccionar elementos del DOM
// const appDiv= document.getElementById('app');
// appDiv.innerText = "Hola mundo"; // texto plano
// appDiv.innerHTML = '<h1>Este es un parrafo</h1>'; // interpreta codigo html

// // añadir clases a un elemnto
// appDiv.classList.add('clase1', 'clase2');

// // seleccion de classname 
// const items= document.getElementsByClassName('class');
// for(let i=0; i<items.length; i++){
//     items[i].innerText = `Hola mundo g${i}`;
// }

// // seleccion por clase
// const saludoP= document.querySelector('.saludo');
// // traer todos por clase
// const saludos= document.querySelectorAll('.saludo');

// saludos.forEach((saludo, index) => {
//     saludo.innerText = `Hola mundo ${index}`;
// });

// añadimos atributos a una etiqueta 
// <img src="imagen.jpg" alt="imagen">
// const github= document.getElementById('github');
// github.innerText = 'ir a mi Github';
// github.textContent= 'ir a mi Github';

/* # Ejercicios básicos de selección del DOM

### Ejercicio 1:

Selecciona el elemento `h1` por su ID. */

const h1= document.getElementById('contenedorPrincipal').querySelector('h1');
h1.style.color = 'red';
h1.textContent = 'Hola mundo';

// ### Ejercicio 2:

// Selecciona todos los párrafos con la clase "parrafo" dentro del `contenedorSecundario`.

const parrafos= document.querySelectorAll('#contenedorPrincipal .parrafo');

// ### Ejercicio 3:

// Selecciona el elemento `img` por su atributo `src`.

const img= document.querySelector('img[src="imagen.png"]');
console.log(img);

// ### Ejercicio 4:

// Selecciona todos los elementos `<span>` dentro del `contenedorSecundario`.

const span= document.querySelectorAll('#contenedorSecundario span');
console.log(span);

// ### Ejercicio 5:

// Selecciona el primer párrafo con la clase "importante".

const parrafoImportante= document.querySelector('.parrafo.importante');
console.log(parrafoImportante);

// ### Ejercicio 6:

// Selecciona todos los párrafos que están dentro de un elemento con el `id` "contenedorPrincipal".

const parrafosContenedorPrincipal= document.querySelectorAll('#contenedorPrincipal p');
console.log(parrafosContenedorPrincipal);

// ### Ejercicio 7:

// Selecciona todos los elementos que tienen el atributo `data-atributo` con valor "valor1".
const elementosData= document.querySelectorAll('[data-atributo="valor1"]');
console.log(elementosData);
// ### Ejercicio 8:
// Selecciona el segundo párrafo que está dentro de un elemento con la clase "importante".
const ParrafosImportantes= document.querySelectorAll(".parrafo.importante");
const segundoParrafoImportantes= ParrafosImportantes.length>1 ? ParrafosImportantes[1] : null;
console.log(segundoParrafoImportantes);
// ### Ejercicio 9:

// Selecciona todos los elementos `<span>` que están dentro de cualquier elemento con la clase "contenedor".
const spanContenedor= document.querySelectorAll('.contenedor span');
// ### Ejercicio 10:

// Selecciona el tercer párrafo dentro del `contenedorPrincipal` que tiene la clase "parrafo".

const pContenedorPrincipal= document.getElementById('#contenedorPrincipal .parrafo');
const tercerParrafo= pContenedorPrincipal.length>2 ? pContenedorPrincipal[2] : null;
console.log(tercerParrafo);
