const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];
//agregar un elemento al final de arreglo de
//spread operator con arreglo de indices
const meses2 = [...meses, 'Agosto'];
//const meses2 = ['Agosto', ...meses ]; tambien se puede usar 
console.log(meses2);

const producto =  { nombre: 'Disco duro', precio: 300 };

const carrito2 = [...carrito, producto];
console.log(carrito2);