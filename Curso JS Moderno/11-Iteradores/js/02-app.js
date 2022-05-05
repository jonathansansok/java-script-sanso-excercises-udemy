const carrito = [
    { nombre: "Monitor de 27 pulgadas", precio: 500},
    { nombre: "celular", precio: 1000},
    { nombre: "tablet", precio: 400, descuento: true},
    { nombre: "placa de audio", precio: 800},
    { nombre: "auriculares", precio: 400},
    { nombre: "mousse", precio: 100},
]

for (let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} Tiene desc.`);
        continue;
    }
   console.log(carrito[i].nombre);
}




/* console.log(carrito[0]);
console.log(carrito.length);

for(let i = 0;i  <= 10; i++){
    if(i === 5){
        console.log("CINCO");
        continue;
    }
    console.log(`Numero: ${i}`);
} */



//crea un for loop que al detectar el numero 5 detenga su busqueda