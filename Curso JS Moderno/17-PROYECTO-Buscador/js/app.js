//variabless
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//contenedor para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;


//generar un objet con la busqueda 
const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : ''
}

//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); //muenstra los aultomotviles a cargar

    //llena las opcions de a;os 

    llenarSelect();
//event listener para los selects de busqueda
});

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
});
year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
});
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
});
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
});
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
});
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
});
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda);
});



//funciones
function mostrarAutos(){
    autos.forEach (auto => {
        //DESTRUCTURING
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmicion: ${transmision} - Precio $${precio} - Color ${color}
        `;
    //insertar en el html
    resultado.appendChild(autoHTML);
    })
}

//genera los ;aos del selector
function llenarSelect() {
    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //agregar las opciones de ano al select

        }
}

//funcion que filtra en base a la busqueda

function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca);
    console.log(resultado);
}

function filtrarMarca(auto){
    const { marca } = datosBusqueda;
    if ( marca ){ 
        return auto.marca === marca;
    }
    return auto;
}