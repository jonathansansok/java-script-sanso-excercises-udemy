const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);
// los dos primeros son similiares 

/* console.log(encabezado.innerText); // no detecta del CSS el visibilty-hidden 
console.log(encabezado.textContent); //visibily-hilent SI lo encuentra

console.log(encabezado.innerHTML); // se trae el html
 */
/* const nuevoHeading = "Nuevo heading";

document.querySelector('.contenido-hero h1').textContent = "nuevo heading";

document.querySelector('.contenido-hero h1').textContent = nuevoHeading;
 */
//modificar una imagen la
const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg'


//cambiar el encabezado 


