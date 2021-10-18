// let nomes= ["fer", "fulano", "ciclano", "beltrano"];
// let nomes2= ["detal", "taltal", "bal", "ual"];
// let todosnomes= nomes.concat(nomes2);
// console.log(nomes);
// console.log(nomes2);
// console.log(todosnomes);
// let qtdarraynome = `o array nomes possui ${nomes.length} elementos`;
// console.log(qtdarraynome);

// let nomes2= ["detal", "taltal", "bal", "ual"];
// let buscanome = "fulano";
// if(nomes2.indexOf(buscanome)!=(-1)){
//     alert(`eu encontrei o nome ${buscanome} e esta na posiçao ${nomes2.indexOf(buscanome)}`);   
// }
// else{
//     alert(`nao encontrei o ${buscanome}`);
// }

// let nomes2=["pedro", "paulo", "maria", "samanta"];
// console.log(nomes2);
// console.log(nomes2.join());

//let frutas = ["uva", "jaca", "pera"];
// frutas.push("maçã");
// frutas.push("laranja");
// console.log(frutas.indexOf("jaca"));

// let insertfruta = "manga";
// if(frutas.indexOf(insertfruta)== -1){
// console.log(`a fruta ${insertfruta} nao esta na lista`);
// frutas.push(insertfruta);
// }
//  else{
//      console.log(`a fruta ${insertfruta} ja esta na lista`)   
// }
// console.log(frutas);

// let frutas = ["uva", "jaca", "pera"];
// frutas.pop();
// console.log(frutas);

// let frutas = ["uva", "jaca", "pera"];
// frutas.reverse();
// console.log(frutas);
// console.log(frutas[0]);

// let frutas = ["uva", "jaca", "pera"];
// frutas.shift();
// console.log(frutas);

// let numeros = [200, 2, 1, 169,67];
// let alfa = ['n', 'p', 'c', 'a', 'b', 'j'];
// numeros.sort();
// console.log(numeros);

// let frutas = ["uva", "jaca", "pera"];
// console.log(frutas.toString());

// let nomes = ["mariana", "patati", "xuxa", "patata"];

// let indice = nomes.indexOf("patata");
// let novalista = nomes.splice(indice,1);
// console.log(nomes);

//  peso = prompt("D")
function valorImc(nome, altura, peso){
   a = Number(altura);
   p = Number(peso);
    let imc = peso / (altura*2);
    console.log("nome..:", nome);
    console.log("altura..:", altura);
    console.log("peso..:", peso);
    console.log("IMC..:", imc);
}
pesopessoa = prompt("digite seu peso");
alturapessoa = prompt("digite sua altura");
nomepessoa = prompt("digite seu nome");

valorImc(nomepessoa, alturapessoa, pesopessoa);
