const formulario = document.querySelector('#formulario');

/* formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log(e.target.method);
});
 */
//eventos
//formulario submit
 formulario.addEventListener('submit', validarFormulario); 

function validarFormulario(e) {
    e.preventDefault();
    console.log("consultar una API...");
    console.log(e.target.action);
}

