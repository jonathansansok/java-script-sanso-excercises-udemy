//variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let  articulosCarrito = [];

cargarEventListener();

function cargarEventListener(){
    //cuando agregas un curso presionando "agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //muestra los cursos de localStorage
    document.addEventListener('DOMContentLoaded', () =>{
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHTML();
    
    });

    //vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        limpiarHTML();
    })
}

//funciones 

function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = (e.target.parentElement.parentElement);
        leerDatosCurso(cursoSeleccionado);
 }
}
//ELIMINA UN CURSO DEL CARRITO_

function eliminarCurso(e){
    console.log(e.target.classList);
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        //eliminar del arreglo de articulosCarrito por el data-id
        articulosCarrito =articulosCarrito.filter(curso => curso.id !== cursoId);
        carritoHTML();//ITERAMOS EL CARRITO Y LO REFRESCA
    }
}



//LEE EL CONTENIDO DEL HTML AL QUE LE DIMO CLICK Y EXTRAE LA INFORMACION DEL CUROS
function leerDatosCurso(curso){
 //   console.log(curso);

//crear un objetco con el contenido del curso actual 
const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
}

//revisa si un elemento ya existe en el carrito con .some

const existe = articulosCarrito.some( curso => curso.id === infoCurso.id)
if(existe){
   const cursos = articulosCarrito.map(curso => {
       if( curso.id === infoCurso.id) {
           curso.cantidad++;
           return curso; //retorna el objeto actualizado
       }else {
           return curso; //retorna los objetos que no son los duplicados 
       }
   })
   articulosCarrito = [...cursos];
}else {
    //agregamos el curso al carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
}



console.log(articulosCarrito);
carritoHTML();
}

//muestra carrito de compras arriba en el html

function carritoHTML(){
    //LIMPIAR EL HTML DEL
    //RECORRRE EL CARRITO Y GENERA EL HTML
    limpiarHTML();
    articulosCarrito.forEach(curso => {
        //LO DEL REGLON DE ABAJO YA ES destructuring o destructurando para react 
        const {imagen, titulo, precio, cantidad, id} = curso
        const row = document.createElement('tr');
        row.innerHTML = `
        <td><img src="${imagen}" width="100"></td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td><a href="#" class="borrar-curso" data-id="${id}">X</a></td>
        `;
        //AGREGA EL HTML DEL CARRITO EN EL BODY
        contenedorCarrito.appendChild(row);
    });
    //agregar el localStorage
    sincronizarStorage();
}

function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}
//ELIMINA LOS CURSOS DEL TABLE BODY

function limpiarHTML(){
    //FORMA LENTA
    //contenedorCarrito.innerHTML = ''
    //FORMA RAPIDA
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

