const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio: 400,
    disponible: true
}


const {nombre,} = producto;
console.log(nombre);

//destructuring en objetos es todo esto.

//destrcturing con arreglos
const numeros = [10,20,30,40,50];

const [primero, segundo, ...tercero] = numeros;

//ojo con REACT que usa mucho esto

console.log(tercero);