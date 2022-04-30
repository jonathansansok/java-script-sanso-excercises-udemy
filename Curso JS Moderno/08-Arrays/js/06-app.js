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

console.table(carrito);

const producto3 = {
    nombre: "teclado",
    precio: "50"
}
// lo mando al principio al teclado


console.table(carrito);

resultado = [...carrito, producto];

resultado = [...resultado, producto2];

resultado = [producto3, ...resultado,];

console.log(resultado);

console.log(carrito);