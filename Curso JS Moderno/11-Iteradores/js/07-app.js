//forEach

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Js'];

const carrito = [
    { nombre: "Monitor de 27 pulgadas", precio: 500},
    { nombre: "celular", precio: 1000},
    { nombre: "bafle mono", precio: 400},
    { nombre: "placa de audio", precio: 800},
    { nombre: "auriculares", precio: 400},
    { nombre: "mousse", precio: 100},
]

//forOf

for(let pendiente of pendientes){
    console.log(pendiente);
}

for(let producto of carrito){
    console.log(producto.precio);
}
