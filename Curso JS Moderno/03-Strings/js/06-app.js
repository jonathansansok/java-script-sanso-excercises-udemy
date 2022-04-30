const producto = " monitor de 20 Pulgadas";

//.repeat te va a permitir repetir una cadena d texto...
const texto = " En Promocion".repeat(2.4);
console.log(texto);
console.log(`${producto} ${texto}!!!`);


//split divide un string por palabras

const actividad = "estoy aprendiendo JavaScript moderno";
console.log(actividad.split(" "));

const hobbies = "Leer, caminar, escuchar musica, escribir, aprender a programar";
console.log(hobbies.split(", "));
const tweet = "aprendiendo JavaScript #JSModernoConJuan";
console.log(tweet.split("#"));

