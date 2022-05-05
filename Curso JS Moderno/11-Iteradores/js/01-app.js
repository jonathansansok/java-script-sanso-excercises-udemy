/* for (let i = 0; i <= 200; i+=5){
 console.log(`Numero: ${i}`);    // cod
} */
//pregunta tipica en un for loop como identificas los numeros pares y los que son impares
/* 
for(let i=1; i<=20; i++){
   if(i % 2 === 0){
    console.log(`Numero   ${i} es PAR`);
   }else{
        console.log(`Numero ${i} es IMPAR`);
    }
} */

const carrito = [
    { nombre: "Monitor de 27 pulgadas", precio: 500},
    { nombre: "celular", precio: 1000},
    { nombre: "bafle mono", precio: 400},
    { nombre: "placa de audio", precio: 800},
    { nombre: "auriculares", precio: 400},
    { nombre: "mousse", precio: 100},
]

console.log(carrito[0]);
console.log(carrito.length);

for(let i = 0;i < carrito.length; i++){
    console.log(carrito[i].nombre);
}

