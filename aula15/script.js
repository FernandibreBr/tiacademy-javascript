// let m = 1;
// // console.log(typeof m);
// if(typeof m === 'number'){
//     console.log(`o dado informado é um number: ${m}`);

// }else{
//         console.log(`o dado informado não é um number: ${m}: ${typeof m}`);}

window.onload=function(){
    // alert("ola povo");
//     const botao = document.getElementById('btn');
//     const txtBox = document.querySelector("#txtBox");
//     const caixa = document.querySelector("#caixa");
//     botao.addEventListener('click', function(){
//         caixa.innerHTML += '' + txtBox.value + '';
//     })
function tabuada(numero){
    let tabuada=0;
if(typeof numero != 'number'){
    alert("digite um balor numerico");
} else{
    if(numero <1 || numero > 10){
        alert("digite um valor entre 1 e 10")
    }else{
        
             console.log(`tabuada do ${numero}`);
             while(tabuada <= 10){ 
        console.log( `${numero} x ${tabuada} = ${numero * tabuada}` );
       tabuada ++; 
     } 
    }
}
   
}
tabuada(2);
}

