 //agregar elementos a localstorage storage
localStorage.setItem('nombre', 'Juan');
sessionStorage.setItem('nombre', Juan);
 
const producto = {
    nombre: 'Monitor de 24',
    precio: 300
}

//primero convierto un array o constructor a string apto para localstorage
const productoString = JSON.stringify( producto );
localStorage.setItem('productosPasados', productoString);
 console.log(productoString); 

//array 
 const meses = ['enero', 'febrero', 'marzo'];
const mesesString = JSON.stringify(meses);
localStorage.setItem('mesesPasados', mesesString); 

//manera abreviada
/* const meses = ['enero', 'febrero', 'marzo'];
localStorage.setItem('mesesPasados', JSON.stringify(meses)); */
