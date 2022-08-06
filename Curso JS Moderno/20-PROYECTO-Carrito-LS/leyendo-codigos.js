//OBJECT CONSTRUCTOR
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = true;
    }
}
///////////////////////////////////////////////
const carrito = [
    { nombre: "Monitor de 27 pulgadas", precio: 500},
    { nombre: "celular", precio: 1000},
    { nombre: "bafle mono", precio: 400},
    { nombre: "placa de audio", precio: 800},
    { nombre: "auriculares", precio: 400},
    { nombre: "mousse", precio: 100},
]


///otra MANERA  son iguales

const nuevoArreglo = carrito.map(function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}`;
});

const nuevoArreglo2 = carrito.forEach( function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});

////////////////////////////
///EMPIEZAN LAS FLECHAS

const aprendiendo = function (tecnologia, tecnologia2){
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}
//si tengo un solo parametro puedo quitar los parentensis
aprendiendo("JavaScript", "NodeJs");

const aprendiendo2 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;

///////////////////////////////////
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

//encontrar un indice de un arreglo de objetos . solo el primero
const indice2 = carrito.findIndex(producto => producto.precio === 100);
console.log(indice2);