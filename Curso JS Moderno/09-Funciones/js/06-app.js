function sumar (a, b){
    console.log(a + b);
}
sumar(2, 3);// son los argumentos, valores reales que reemplazan a las letras


sumar(200, 100);
//le agrego valores por default
function saludar(nombre = "desconocido", apellido = ""){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar("juan", "perez");
saludar();


