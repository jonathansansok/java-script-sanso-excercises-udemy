
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');
//variables para campos 
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 


eventListeners()
function eventListeners(){
    //cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);
    //campos del formulario de email
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    // reiniciar el formulario
    btnReset.addEventListener('click', reiniciarFormulario);

    //enviar email
    formulario.addEventListener('submit', enviarEmail);
}


//funciones 
function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

//validar el formulario 
function validarFormulario(e){
    console.log(e.target.type);
    if(e.target.value.length > 0 ){


        
        //elimina los errores...
        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        }


        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    }else {
        e.target.classList.remove('border', 'border-green-500');
       e.target.classList.add('border', 'border-red-500');
       mostrarError('todos los campos son obligatorios');
    }
//expresion regular para tener validacion mas profesional siguiente
    if(e.target.type === 'email'){
    if (er.test( e.target.value)){
        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        }

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    }else {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError('email no valido');
    }
}
    if (er.test( email.value) && asunto.value !== '' && mensaje.vale !== ''){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}


function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje; 
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 
    'text-red-500', 'p-3', 'mt-3', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0){
        formulario.appendChild(mensajeError);
    }
}

//ENVIA EL EMAIL DEL
function enviarEmail(e){
    e.preventDefault();
    // mostrar el spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    //despues de 3 segundos ocultar el spinner y mostrar el mensajeErrors
    setTimeout( () => {
        spinner.style.display = 'none';
        //mensaje de exitosa
        const parrafo = document.createElement('p');
        parrafo.textContent = 'Mensaje enviado correctamente';
        parrafo.classList.add('text-center', 'my-10', 'p-3', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');

        //inserta el parrafo antes de spineer
        formulario.insertBefore(parrafo, spinner);

        setTimeout( () => {
            parrafo.remove(); //eliminar el mensaje de exito
            reiniciarFormulario();
        }, 5000);
    },  3000);
}

//nueva funcion que resetea el formulario del

function reiniciarFormulario(){
    formulario.reset();
    iniciarApp();
}