//eventos submit sobre el formulario

/* const formulario = document.querySelector('#formulario');
//le pongo E porque el evento se presente cuando clickeo el submit llamado anteriormente llamado CLICK!!!!!!!!!
 formulario.addEventListener('submit', (e) =>{ //cuando alguien presiionna el button que tiene el type submit
    e.preventDefault();
    console.log(e.target.method);
}); */
 
//eventos
//formulario submit
 formulario.addEventListener('submit', validarFormulario); 

function validarFormulario(e) {
    e.preventDefault(); 
    console.log("consultar una API...");
    console.log(e.target.action);
}

