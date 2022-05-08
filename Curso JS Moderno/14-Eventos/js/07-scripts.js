//delegacion delegation es otra tecnica a la de bubbling

const cardDiv = document.querySelector('.card');

/* cardDiv.addEventListener('click', e => {
console.log(e.target.);

}) */

/* cardDiv.addEventListener('click', e => {
    console.log(e.target.classList);
    }); */

cardDiv.addEventListener('click', e => {
    if(e.target.classList.constains('titulo')){
        console.log('Diste click en precio');
    }
    if(e.target.classList.constains('precio')){
        console.log('Diste click en titulo');
    }
    if(e.target.classList.constains('card')){
        console.log('Diste click en card');
    }
});