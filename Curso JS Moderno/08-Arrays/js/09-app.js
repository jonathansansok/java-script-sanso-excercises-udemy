const carrito = [
    { nombre: "Monitor de 27 pulgadas", precio: 500},
    { nombre: "celular", precio: 1000},
    { nombre: "bafle mono", precio: 400},
    { nombre: "placa de audio", precio: 800},
    { nombre: "auriculares", precio: 400},
    { nombre: "mousse", precio: 100},
]

for(let i = 0; i < carrito.length; i++  ){
/*     console.log(carrito[i].nombre); */
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}
///otra MANERA  son iguales


carrito.forEach(function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});

