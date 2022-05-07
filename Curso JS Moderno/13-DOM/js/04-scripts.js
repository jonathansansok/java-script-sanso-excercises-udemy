
//todo esto solo retorna un solo elemento
const card = document.querySelector('.card');
//sole retorna el primero que encuentra
console.log(card);

// podemos tener selectores especificos como en css
const info = document.querySelector('.premium .info');
console.log(info);

//seleccionar el segunda carde de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

//tambien seleccionar ID

const formulario2 = document.querySelector('#formulario');
console.log(formulario2);

const formulario = document.querySelector('.contenido-hero #formulario');
console.log(formulario);

const navegacion = document.querySelector('nav');
console.log(navegacion);