//eliminar un elemento por si mismo

const primerEnlace = document.querySelector('a');

 primerEnlace.remove(); 



//eliminar un elemento desde su padre

const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.removeChild(navegacion.children[2]);

console.log(navegacion.children);