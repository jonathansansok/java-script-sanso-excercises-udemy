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


console.log(producto);
//no
console.log(producto.informacion.fabricacion.pais);