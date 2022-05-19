 //Generar HTML con JavaScript

//crear un nuevo enlace en la
const enlace = document.createElement('A');

//agregar el texto
enlace.textContent = 'nuevo enlace';

//agregar href
enlace.target = "_blank";

enlace.href = '/nuevo-enlace';


console.log(enlace);

//seleccionar la nevagacion
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(enlace);

console.log(navegacion.children);

//agregarlo al DOM elemento padre

//YA SE AGREGO arriba Y LO COLOCA AL FINAL 

//////PERO SI LO QUIERO METER AL mediO USO INSERT BEFORES
//primero veo los lugares disponibles con
console.log(navegacion.children);

//ahora inserto el enlace antes de la posicion numero1
navegacion.insertBefore(enlace, navegacion.children[1]);

/// le agrego atributos de CSS
enlace.setAtributte('data-enlace', 'nuevo-enlace');
enlace.classList.add('enlace-creado');

// LE AGREGO UNA FUNCION AL ENLACE
enlace.onclick = miFuncion();

function miFuncion(){
    alert('Diste click');
}


/////////////////////////////////////////
//crear un card de forma dinamica

const parrafo1 = document.createElement('P');
parrafo1.textContent = "concierto";
parrafo1.classList.add("categoria", "concierto")

const parrafo2 = document.createElement('P');
parrafo2.textContent = "concierto de rock";
parrafo2.classList.add("titulo");


const parrafo3 = document.createElement('P');
parrafo3.textContent = "800 por persona";
parrafo3.classList.add("precio");

console.log(parrafo1);
console.log(parrafo2);
console.log(parrafo3);

///ahora lo agrego a alguien
const info = document.createElement('div');
info.classList.add("info");
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.classList.add('img-fluid');
imagen.alt = 'texto alternativo';


//crear el card QUE SER PADRE DE INFO Y ABUELO DE LOS ELEMENTOS
const card = document.createElement('div');
card.classList.add('card');

//asignar la imagen el
card.appendChild(imagen);
//asignar info
card.appendChild(info);
console.log(info);

console.log(card);

//////insertar en el HTML element
const contenedor = document.querySelector(".hacer .contenedor-cards");
contenedor.appendchild(card, contenedor.children[0]);
//si le quiero cambiar de lugar lo puedo hacer con insertBefore
contenedor.insertBefore(card, contenedor.children[0]);
//o puedo usar el appendChild

