let nomes = ["eu", "eu mesmo", "o proprio", "ele mesmo", "em pessoa"];
const coisaNomes = (name, novoname, index)=>{
    console.log("quantidade de elementos do array...:", name.length);
    console.log(`voce escolheu o indice ${index} que é o elemento ${name[index]}`);
    console.log(`o nome ${novoname} foi inserido no array`);
    name.push(novoname);
    console.log("a quantidade de elemntos atual do array é de..:", name.length);
}
coisaNomes(nomes, "aquele", 4);
coisaNomes(nomes, "aquele ali", 2);