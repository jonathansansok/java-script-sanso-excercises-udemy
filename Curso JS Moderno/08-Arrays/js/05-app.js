/* const meses = ["Enero", "Febrero", "Marzo"];

meses[3] = "Abril";

//agregar al final del arreglo sin conocer la extension
meses.push("Abril");
meses.push("Mayo");

console.table(meses); */

const carrito = [];

const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio: 400
}

const producto2 ={
    nombre: "celular",
    precio: "800"

}
carrito.push(producto);
carrito.push(producto2);
console.table(carrito);

const producto3 = {
    nombre: "teclado",
    precio: "50"
}
// lo mando al principio al teclado
carrito.unshift(producto3);

console.table(carrito);