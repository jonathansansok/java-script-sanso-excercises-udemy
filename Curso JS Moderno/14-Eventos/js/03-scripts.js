const busqueda = document.querySelector('.busqueda');
/* 
 busqueda.addEventListener('keydown',() => {
    console.log("escribiendo...");
}) 

 busqueda.addEventListener('keyup',() => {
    console.log("escribiendo...");
})
 
 busqueda.addEventListener('blur',() => { //cuando doy click por fuera se actiba
    console.log("escribiendo...");
})

 
 
busqueda.addEventListener('copy',() => { //cuando ponene copiar se mandaj a consola todo
    console.log("escribiendo...");
})
 
//paste
 busqueda.addEventListener('cut',() => {
    console.log("escribiendo...");
})  */
 //el mas comun de todo engloba a todos menos blur
/* busqueda.addEventListener('input',(e) => { /// tira en consola todo lo que pasa informacion
    console.log(e);
}) */

 
busqueda.addEventListener('input',(e) => {  // te va a decir que elementos trabajamos
    console.log(e.type);
})
  

/*  busqueda.addEventListener('input',(e) => {
    console.log(e.target); //que input en especifico con todos los datos //placeholder...
})
  */

/* busqueda.addEventListener('input',(e) => {  ///EL MAS USADO LO QUE EL USUARIO ESCRIBRE
    console.log(e.target.value);
})
 */
/* busqueda.addEventListener('input',(e) => { //si el usuario no pone nada que tire fallo
    if(e.target.value === ''){
        console.log('fallo la validacion');
    }
});
 */