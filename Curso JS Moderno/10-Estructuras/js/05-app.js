//switch cases
const metodoPago = "efectivo";

switch(metodoPago){
    case "efectivo":
        pagar();
        break;

    case "cheque":
        console.log('Pagaste con cheque');
        break;

    default: 
    console.log("Aun no has seleccionado un metodo de pago no soportado");
    break;
}
function pagar(){
    console.log("Pagando....");
}