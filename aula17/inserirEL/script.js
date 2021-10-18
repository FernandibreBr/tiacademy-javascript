window.onload=function(){

    const cxproduto = document.querySelector("#produto");
    const btncadastrar = document.querySelector("#cadastrar");
    const lista = document.querySelector("#listadeprodutos");
    btncadastrar.addEventListener('click', function(){
        let li = document.createElement('li');
        lista.appendChild(li).setAttribute('class', 'listadefrutas');
        lista.appendChild(li).textContent=cxproduto.value;
    })

}