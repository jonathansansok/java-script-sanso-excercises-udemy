const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true,

}

//const nombre = producto.nombre
//console.log(nombre);

//Destructuración
const { nombre, precio, disponible, noExiste } = producto;
/* const { precio } = producto.precio; */
console.log(nombre);
console.log(precio);
console.log(disponible);
console.log(noExiste);
