const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//for each en que indice se encuentra el valor

meses.forEach((mes, i) => {
    if(mes === "Abril"){
        console.log(i);
        console.log(mes);

    }
})


///find index encontrara el indice de abri l
const indice = meses.findIndex(mes => mes === "Abril");
console.log(indice);

if (indice > 0){
    console.log("Si existe");
}

//encontrnar un indice de un arreglo de objetos . solo el primero
const indice2 = carrito.findIndex(producto => producto.precio === 100);
console.log(indice2);