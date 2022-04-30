
const carrito = [];

const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio: 400
}

const producto2 ={
    nombre: "celular",
    precio: "800"

}


const producto4 = {
    nombre: "celular 2",
    precio: "100"
}

carrito.push(producto2);
carrito.push(producto);
carrito.push(producto4);

const producto3 = {
    nombre: "teclado",
    precio: "50"
}

// lo mando al principio al teclado

carrito.unshift(producto3);

console.table(carrito);

/* resultado = [...carrito, producto];

resultado = [...resultado, producto2];

resultado = [producto3, ...resultado,];

console.log(resultado);

console.log(carrito);

//eliminar ultimo elemento del array para
carrito.pop();

console.table(carrito);

//eliminar del inicio del arreglo
carrito.shift();

console.table(carrito); */

//SPLICE para borrar desde ..... hasta ....
carrito.splice(1, 2);
console.table(carrito); 
