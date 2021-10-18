// let nome = "fernando rocha"
// console.log(nome.match('f'))

// console.log(nome.search(/F/i))
// console.log(nome[0])

// let str = `    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellat velit sed. Voluptatibus neque sapiente tempora sint magnam, culpa unde, delectus aut itaque consectetur placeat aperiam. Nam perspiciatis possimus officia!
// `;
// let strOutra = str.replace(/sit/gi, 'nao');
// console.log(strOutra);

// let gato = "gato";
// let outrogato = "gato";
// console.log(gato.localeCompare(/gato/gi));

// let num = Number('10');
// console.log(num.toString());

// let str = `    Lorem ipsum dolor SIT amet consectetur adipisicing elit. Ab repellat velit sed. Voluptatibus neque sapiente tempora sint magnam, culpa unde, delectus aut itaque consectetur placeat aperiam. Nam perspiciatis possimus officia!`;
// console.log(str.toLowerCase());

// let gato = "gato";
// let outrogato = "GATO";
// let cat1 = gato.toLowerCase();
// let cat2 = outrogato.toLowerCase();
// console.log(cat1.localeCompare(cat2));

// let str = `    Lorem ipsum dolor SIT amet consectetur adipisicing elit. Ab repellat velit 
// sed. Voluptatibus neque sapiente tempora sint magnam, culpa unde, delectus aut itaque consectetur placeat aperiam. Nam perspiciatis possimus officia!`;
// console.log(str.toUpperCase());

// let str1 = `      Lorem ipsum dolor SIT amet consectetur adipisicing elit. Ab repellat velit sed. Voluptatibus neque sapiente tempora sint magnam, culpa unde, delectus aut itaque consectetur placeat aperiam. Nam perspiciatis possimus officia!`;
// console.log(str1.trim());
// let str2 = `      Lorem ipsum dolor SIT amet consectetur adipisicing elit. Ab repellat velit sed. Voluptatibus neque sapiente tempora sint magnam, culpa unde, delectus aut itaque consectetur placeat aperiam. Nam perspiciatis possimus officia!`;
// console.log(str2);

// let num = 1;
// console.log(isNaN('8i'));
// if(!isNaN(num)){
// console.log('isto é um número')
// } else{
//     console.log("isto não é um número")
// }

let valor= 2.456;
console.log(valor.toFixed(1));

console.log(valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))