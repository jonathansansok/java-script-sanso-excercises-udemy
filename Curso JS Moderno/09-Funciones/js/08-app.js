function sumar(a, b){
    return a + b ;
}

const resultado = sumar(2, 3);
console.log(resultado);

//ejemplo mas avanzado------------------------------------

let total = 0;
function agregarCarrito(precio){
return total += precio;
}

function calcularImpuesto(total){
    return total * 1.15;
}
total = agregarCarrito(30);
total = agregarCarrito(20);

const totalPagar = calcularImpuesto(total);
console.log(`El total a pagar es de ${totalPagar}`);
console.log(total);