const aprendiendo = function (tecnologia, tecnologia2){
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}
//si tengo un solo parametro puedo quitar los parentensis
aprendiendo("JavaScript", "NodeJs");

const aprendiendo2 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;

console.log(aprendiendo2('Javascript', 'nodejs'));