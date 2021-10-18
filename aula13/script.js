// let i = 0;
// for(let x=0; x<=10; x++){
//     console.log(`o valor da interação é ${x} o x mais ele mesmo ${i++}`);
// }

// let pessoas = {
//     nome:"fulano",
// }
// for(let propriedade in pessoas){
//     console.log(pessoas.nome);
// }

// let frutas = ["melancia","manga", "banana", "uva"];
// for(let nomefruta of frutas){
//     console.log(nomefruta);
// }
// for(let x=0; x < frutas.length; x++){
//     console.log(`o nome da fruta é ${frutas[x]}`);
// }
let pessoas =[ {
     nome:"fulano",
     heroi:"de si mesmo",
 },
 {
    nome:"ciclano",
    heroi:"dele mesmo",
}
]
pessoas.push({nome:"beltrano", heroi:"de sua vida"});
// let seres = pessoas[0].nome;
// (console.log(seres);
for(let seres of pessoas){
    // console.log(seres);
    for(let s in seres){
        console.log(`${s} ${seres[s]}`);
    }
}