const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion : {
        medidas : { 
            peso: "1kg",
            medida: "1metro"
            },
        fabricacion: {
            pais: "China",
        }
    }
}

const { nombre, informacion, informacion: {fabricacion: {pais}} } = producto;

console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);