const usuario = false;
const puedePagar = false;

if (usuario && puedePagar) {
    console.log("si, puede comprar");
} else if (!puedePagar && !usuario){
    console.log("no, no puede comprar");
}else if (!usuario){
console.log("incia sesion o saca una cuenta");
} else if (!puedePagar){
    console.log("fondos insuficientes");
}


