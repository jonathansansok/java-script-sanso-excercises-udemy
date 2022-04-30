"use strict";

const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true,
}

Object.seal(producto); // puedo modificar pero no agregar ni quitar propiedades
/* producto.imagen =  "imagen.jpg";*/
producto.disponible = false; 

console.log(producto); 

console.log(Object.isSealed(producto));


