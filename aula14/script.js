// let loop=0;
// let cores = ["vermelho", "verde"];
// while( loop < cores.length){
//     console.log(cores[loop]);
//     loop++;
// }

let teste = 0;
do{
   teste = Number(prompt("digite 0 para sair"))
   switch(teste){
    case 0:
        alert("saindo do sistema");
        break; 
       case 1:
         alert("cadastrando");
         break;    
           case 2:
               alert("consultando");
               break;
               default:
                   alert("opção invalida");
                   break;
   }
} while(teste != 0)