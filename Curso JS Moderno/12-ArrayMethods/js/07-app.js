const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const meses2 = ['Agosto', 'Septiembre'];

const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

const resultado = meses.concat(meses2, meses3, 'otro mes');
console.log(resultado);

//spread operator 
const resultado2 = [...meses, ...meses2, ...meses3, ...'otro mes'];
//te agrega letra por letra aca abajo
const resultado3 = [...meses, ...meses2, ...meses3, 'otro mes'];
console.log(resultado2);
console.log(resultado3);