/* window.addEventListener('scroll', () => {
    console.log('scrolling');
}) */
//eventos con scrolling
//scroll

/* window.addEventListener('scroll', () => {
    const scrollPX = window.scrollY;
    console.log(scrollPX);
}) */

/* window.addEventListener('scroll', () => {
  const premium = document.querySelector('.premium');
  const ubicacion = premium.getBoundingClientRect();
  console.log(ubicacion);
}) */
//eventos sobre scroll da mas scroll el elemento ya esta visible


window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    console.log(ubicacion);
   if(ubicacion.top < 100){
       console.log('el elemento esta visible');}
    else{
        console.log('da mas scroll');
    }
})