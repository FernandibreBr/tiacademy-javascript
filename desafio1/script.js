window.onload=function(){
    let frutas = [
        {fruta: "Mamão Papaia", preco: 10.85},
        {fruta: "Laranja", preco: 2.00},
        {fruta: "Manga", preco: 3.90},
        {fruta: "Melão", preco: 5.20},
        {fruta: "Melancia", preco: 7.70}
        ]
      let catalogo = frutas[0].fruta  
       const produtos = document.querySelector("#produtos");
    (()=>{
    for(let frt of frutas){
        const lista = document.createElement('li');
        for(listap in frt){
        if(listap == 'preco'){
            produtos.appendChild(lista).setAttribute('data-preco', frt[listap])
        } else{produtos.appendChild(lista).textContent= `${frt[listap]}`};
    }
    }
    })()



    
    const frut = document.querySelectorAll('#produtos')
const cestaDoCliente = document.querySelector('#cestaDoCliente')
const total = document.querySelector('#mostraTotalCompra')
console.log(frut);
console.log(cestaDoCliente)

frut.forEach(function(list){
    list.addEventListener('click', function(elemento){
    let listlicliente = document.createElement('li');


for(let frt of frutas){
    for(listap in frt){
        if(listap == 'preco'){
            cestaDoCliente.appendChild(listlicliente).setAttribute('data-preco', frt[listap])
        } else{cestaDoCliente.appendChild(listlicliente).textContent=elemento.target.innerHTML;}
    }
}

function calculo(idproduto, resultado){
    const preco = document.querySelectorAll(`#${idproduto} > li`);
    const valorResultado = document.querySelector(`#${resultado}`);
    let T = 0;

    for(let i of preco){
        T += Number(elemento.target.dataset.preco);
        console.log(elemento.target.dataset.preco);
    }
    valorResultado.value = T;
}calculo('cestaDoCliente', 'mostraTotalCompra');
    })
})

}
