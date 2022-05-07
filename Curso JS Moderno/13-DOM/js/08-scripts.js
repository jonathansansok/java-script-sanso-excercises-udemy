const navegacion = document.querySelector('.navegacion');
//traversing el html recorriendo el html

console.log(navegacion);

//ir al primer elemento hijo el html
console.log(navegacion.firstElementChild);

//ir al ultimo elemento hijo el html
console.log(navegacion.firstElementChild);


/*
console.log(navegacion.childNodes); // los espacion en blanco son concideradose elemtnso */

//console.log(navegacion.children[0]); // los espacion en blanco no son concideradose elementos
//console.log(navegacion.children[0].nodeName);
//console.log(navegacion.children[0].nodeType);

const card = document.querySelector('.card');

/* card.children[1].children[1].textContent = "Nuevo traversing DOM"

console.log(card.children[1].children[1].textContent);

card.children[0].src = 'img/hacer3.jpg';

console.log(card.children[0]);

/// ir hacia arriba>
//de hijo al padre 

console.log(card.parentNode);
console.log(card.parentElement);
console.log(card.parentElement.parentElement.parentElement);
// para ir al siguiente elemento

console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

//ir al elemento previously

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard);

console.log(ultimoCard.previousElementSibling);


 */
