const autenticado = true;

if(autenticado){
    console.log('Usuario autenticado');
}
const puntaje = 350;


function revisarPuntaje(){
    if(puntaje > 400){
        console.log('Excelente');
        return;
    }
    else if (puntaje > 300){
        console.log("buen puntaje, felicidades");
        return;
    }
}

revisarPuntaje();
