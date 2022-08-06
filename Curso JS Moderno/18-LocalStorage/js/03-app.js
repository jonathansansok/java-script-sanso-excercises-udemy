//eliminar elementos de local storage

localStorage.removeItem('nombre');

//actualizar un registro
const mesesArray = JSON.parse(localStorage.getItem('mesesPasados'));
console.log(mesesArray);
mesesArray.push('Nuevo mess');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray));

///LIMPIAR LOCALSTORAGE

localStorage.clear();