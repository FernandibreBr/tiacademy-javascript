function verificarmaiornum(num1, num2){
if(num1 > num2){
    consolee.log("o numero " +num1+ " é maior que o número " + num2);
} else{
    console.log("o número " +num1+ " é menor que o numero " + num2);
}
}

// verificarmaiornum(1,3);

function teste(){
    alert("estou na function");
    
    return nome;
}
// teste();
//sonsole.log(teste());
// let msg=(nome)=>{ return nome};
//  console.log(msg("jose"));

// (function(produto, preco){
// alert("o produto" + produto + " e o preco " + preco);
// })("biscoito", 2.35)

let valor1 = prompt("digite o valor 1");
let valor2 = prompt("digite o valor 2");

const soma = (valor1, valor2)=>{
    let resultado = Number(valor1) + Number(valor2);
    console.log(resultado);
}
soma(valor1, valor2);