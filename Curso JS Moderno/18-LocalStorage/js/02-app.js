const nombre = localStorage.getItem('nombre') ;
console.log(nombre);

const productoJSON = localStorage.getItem('productosPasados');
//convierte un string del local storage a un objeto
console.log(JSON.parse(productoJSON));

const meses = localStorage.getItem('mesesPasados');
//otra abreviacion const mesesArray = JSON.parse(meses);
console.log(JSON.parse(meses));
