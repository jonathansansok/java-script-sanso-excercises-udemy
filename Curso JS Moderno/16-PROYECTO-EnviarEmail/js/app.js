/* 
//variables
const btnEnviar = document.getElementById('enviar');
//variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

enventListeners();
function enventListeners(){
    //cuando la app arranca 
    document.addEventListener('DOMContentLoaded', iniciarApp);
    //campos del formulario
    email.addEventListener('blur', validarFormulario);
}

//funciones
function iniciarApp(){
 btnEnviar.disabled = true;
 btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

//valida el formulario
function validarFormulario(e){

    if(e.target.value.lenght > 0){
        console.log("si hay algo");
    }else{
        e.target.style.borderBottomColor = 'red';
    }
}
 */

//variables 

const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');
//variables para campos 
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');


eventListeners()
function eventListeners(){
    //cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);
    //campos del formulario de email
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
}


//funciones 
function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

//validar el formulario de la
function validarFormulario(e){
    if(e.target.value.lenght > 0 ){
        console.log("si hay algo")
    }else {
       e.target.style.borderBottomColor = 'red';
       e.target.classList.add('border', 'border-red-500');
       mostrarError();
    }
}

function mostrarError(){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = "todos los campos son obligatorios";
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 
    'text-red-500', 'p-3', 'mt-3', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0){
        formulario.appendChild(mensajeError);
    }
}