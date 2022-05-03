const dinero = 300;
const totalAPagar = 300;
const tarjeta = false;
const cheque = false;

if (dinero >= totalAPagar) {
    console.log('si, puede pagar');
} else if(tarjeta) {
    console.log("fondos insuficientes");
} else if (cheque) {
    console.log("fondos insuficientes");
}
else {
    console.log("fondos insuficientes");
}