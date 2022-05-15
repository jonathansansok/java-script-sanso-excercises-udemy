//cambiar el color de encabezado 
//modificar el css desde javascript
const encabezado = document.querySelector('h1');
encabezado.style.backgroundColor = "red";
encabezado.style.fontFamily = "Arial";
encabezado.style.textTransform = "uppercase"; 

//PERO TAMBIEN SE PUEDE HACER DESDE EL HECHO DE AGREGAR O QUITAR CLASES COMO :

const card = document.querySelector('.card');
//aparece todo el div del card
console.log(card);

//AGREGAR O QUITAR CLASES COMO :
card.classList.add("nueva-clase, segunda-clase");
//existe el className que te trae las clases como sSTRING


//existe el className que te trae las clases como sSTRING
//eliminar clase o Id
card.classList.remove("card");
console.log(card.classList);
//usando classlist 
