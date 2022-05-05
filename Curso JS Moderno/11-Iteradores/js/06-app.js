//forEach

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Js'];

pendientes.forEach((pendiente, indice) =>{
 console.log(`${indice}: ${pendiente}`);
})

const carrito = [
    { nombre: "Monitor de 27 pulgadas", precio: 500},
    { nombre: "celular", precio: 1000},
    { nombre: "bafle mono", precio: 400},
    { nombre: "placa de audio", precio: 800},
    { nombre: "auriculares", precio: 400},
    { nombre: "mousse", precio: 100},
]

carrito.forEach((producto) => {
  console.log(producto);
});
//es igual a un
const nuevoArreglo = carrito.forEach( producto => producto.nombre);
//con MAP creo un nuevo arreglo
const nuevoArreglo2 = carrito.map( (producto) => producto.nombre);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);