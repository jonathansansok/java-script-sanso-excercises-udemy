"use strict";

const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true,
}

Object.freeze(producto); // No se puede modificar el objeto con el freeze
/* producto.imagen =  "imagen.jpg";
producto.disponible = false; */

/* console.log(producto); */

console.log(Object.isFrozen(producto));
