

iniciarApp()

function iniciarApp(){
    console.log("iniciandoApp");
    segundaFuncion();
}

function segundaFuncion(){
    console.log("Desde la segunda funcion");
    usuarioAutenticado("Pablo");
}

function usuarioAutenticado(usuario){
    console.log("Autenticando usuario..espere...");
    console.log(`Usuario autenticado ${usuario}`);
}

//una funcion llama a otro , tipo operativo