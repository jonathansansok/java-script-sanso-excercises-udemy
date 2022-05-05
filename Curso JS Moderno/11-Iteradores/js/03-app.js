//siempre preguntan en un trabajo fizz buzz
//3 ,6,9 fizz
// 5 10 15 20 buzz
// 15 30 fizzbuzz

for (let i=1; i <= 100; i++){
    if(i % 15 === 0){
        console.log(`${i} fizzbuzz`);
    }
    else if(i % 3 === 0){
    console.log(`${i} fizz`);
    }else if (i % 5 ===00){
        console.log(`${i} buzz`);
    }
}