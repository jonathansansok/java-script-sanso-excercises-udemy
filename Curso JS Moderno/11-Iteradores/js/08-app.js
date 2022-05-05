//forEach itera sobre arreglos


//forIn itera sobre objetos

const automovil = {
    modelo: "camaro", 
    year: 1969,
    motor: 6.0
}

for(let propiedad in automovil){
    console.log(`${automovil[propiedad]}`);
}
//esto se agrego en ECMA 7
for(let [llave, valor] of Object.entries(automovil)){
    console.log(valor);
    console.log(llave);
}

