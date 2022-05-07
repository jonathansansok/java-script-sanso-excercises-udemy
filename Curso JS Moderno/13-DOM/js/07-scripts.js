//cambiar el color de encabezado 
const encabezado = document.querySelector('h1');
//encabezado.style.backgroundColor = "red";
//encabezado.style.fontFamily = "Arial";
//encabezado.style.textTransform = "uppercase"; 

//PERO TAMBIEN SE PUEDE HACER DESDE EL HECHO DE AGREGAR O QUITAR CLASES COMO :

const card = document.querySelector('.card');
card.classList.add("nueva-clase, segunda-clase");
//eliminar clase o Id
card.classList.remove("card");
console.log(card.classList);
//usando classlist 
