// function pessoa(nome){
// this.nome = nome;
// }
// pessoa.prototype.msg = function(){
//     alert("ola" + this.nome);
// }
// let novapessoa = new pessoa("jose");
// let outrapessoa = new pessoa("maria");
// novapessoa.msg();
// outrapessoa.msg();
// // console.log(novapessoa.none);
// console.log(novapessoa)

// let pessoa2 = {
//     'nome':'',
//     'idade':''
// }
// pessoa2.__proto__.msg = function(){
//     alert("ola" + pessoa2.nome)
// }
// let P = pessoa2;
// P.nome = "fernando";
// P.msg();
// console.log(P);

let pessoa3 = [
    {
            'nome':'fernando',
            'idade': 18,
            'sexo':'m'
    },{
    'nome':'maria',
    'idade': 18,
    'sexo':'f'}
]
let npessoa = pessoa3;
console.log(`existem ${npessoa.length} cadastradas`)
console.log(npessoa[1].nome);