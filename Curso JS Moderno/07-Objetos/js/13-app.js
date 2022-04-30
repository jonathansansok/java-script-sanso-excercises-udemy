const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true,
}

//te retorna las propiedades antes de los dos puntos :
console.log(Object.keys(producto));

//te retorna los valores despues de los dos puntos :
console.log( Object.values(producto));

//te retorna todo
console.log(Object.entries(producto));