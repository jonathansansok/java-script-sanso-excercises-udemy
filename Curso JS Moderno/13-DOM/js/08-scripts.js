const navegacion = document.querySelector('.navegacion');
//traversing el html recorriendo el html

console.log(navegacion);

//ir al primer elemento hijo el html
console.log(navegacion.firstElementChild);

//ir al ultimo elemento hijo el html
console.log(navegacion.lastElementChild);


/*
console.log(navegacion.childNodes);
// los espacion en blanco son concideradose elemtOS*/ // y los espacios en blanco son los saltos de linea


//CHILDRENS SOLO VA A LISTAR LOS ELEMENTOS QUE NOS SIRVE SIN ESPACIOS INUTILES
//console.log(navegacion.children[0]); // los espacion en blanco no son concideradose elementos
//console.log(navegacion.children[0].nodeName); // dice que tipo de etiqueta es
//console.log(navegacion.children[0].nodeType); // node significa 1 es igual a elementos // 2 es igual a atributos // 3 es igual a texto
//los comentarios tambien tiene su propio tipo de nodo

const card = document.querySelector('.card');

/* card.children[1].children[1].textContent = "Nuevo traversing DOM"

console.log(card.children[1].children[1].textContent);

card.children[0].src = 'img/hacer3.jpg';

console.log(card.children[0]);

/// ir hacia arriba>
//de hijo al padre 

console.log(card.parentNode); // NO SE RECOMIENDO PORQUE AGARRA ESPACIOS BLANCOS
console.log(card.parentElement); // SI SE RECOMIENDA PORQUE NO AGARRA ESPACIOS BLANCOS
console.log(card.parentElement.parentElement.parentElement); // para ir al siguiente elemento

//IR AL SIGUIENTE ELEMENTO HERMANO. ES DECIR IR A LA CARD 2 O 3 O 4.

console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

//IR AL PREVIUS ELEMENTO HERMANO. ES DECIR IR A LA CARD 2 O 3 O 4.

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard);

console.log(ultimoCard.previousElementSibling);


 */
