/* //Generar HTML con JavaScript

//crear un nuevo enlace en la
const enlace = document.createElement('A');

//agregar el texto
enlace.textContent = 'nuevo enlace';

//agregar href
enlace.tarjet = "_blank";

enlace.href = '/nuevo-enlace';


console.log(enlace);
//agregarlo al DOM elemento padre

enlace.target = "_blank";
enlace.setAtributte('data-enlace', 'nuevo-enlace');
enlace.classList.add('enlace-creado');

enlace.onclick = miFuncion();



const navegacion = document.querySelector('.navegacion');

//navegacion.appendChild(enlace);

//para colocarlo entre dos elementos para
console.log(navegacion.children); //veo sus posiciones

navegacion.insertBefore(enlace, navegacion.children[1]);



function miFuncion (){
    alert('hola');
} */

/////////////////////////////////////////
//crear un card

const parrafo1 = document.createElement('P');
parrafo1.textContent = "concierto";
parrafo1.classList.add("categoria", "concierto")

const parrafo2 = document.createElement('P');
parrafo2.textContent = "concierto de rock";
parrafo2.classList.add("titulo");


const parrafo3 = document.createElement('P');
parrafo3.textContent = "800 por persona";
parrafo3.classList.add("precio");

console.log(parrafo2);

const info = document.createElement('DIV');
info.classList.add("info");
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//crear la imagen 
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.classList.add('img-fluid');

//crear el card 
const card = document.createElement('div');
card.classList.add('card');


//asignar la imagen el
card.appendChild(imagen);

//asignar info
card.appendChild(info);
console.log(info);
//insertar en el HTML element

const contenedor = document.querySelector(".hacer .contenedor-cards");
contenedor.insertBefore(card, contenedor.children[0]);
//o puedo usar el appendChild

