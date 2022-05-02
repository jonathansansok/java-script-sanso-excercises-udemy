const carrito = [
    { nombre: "Monitor de 27 pulgadas", precio: 500},
    { nombre: "celular", precio: 1000},
    { nombre: "bafle mono", precio: 400},
    { nombre: "placa de audio", precio: 800},
    { nombre: "auriculares", precio: 400},
    { nombre: "mousse", precio: 100},
]


///otra MANERA  son iguales

const nuevoArreglo = carrito.map(producto =>  `${producto.nombre} - Precio: ${producto.precio}`);
//la manera larga esta explicada en el app.js 10 de arrays

carrito.forEach( producto => `${producto.nombre} - Precio: ${producto.precio}` );

console.log(nuevoArreglo);


