function calcular(idproduto, resultado){
    const preco = document.querySelectorAll(`#${idproduto} >li`);
    const valorresultado = document.querySelector(`#${resultado} `);
    let totalzinho=0;
    for(let i of preco){
        totalzinho+=Number(i.dataset.preco);
        // console.log(i.dataset.preco)

    }
    valorresultado.value = totalzinho;

}
function removerprodutos(id){
    const lista = document.querySelectorAll(`#${id} >li`);
    for(let produto of lista){
        produto.addEventListener('click', function(){
            produto.remove();
            calcular('produtos', 'somatotal');

        });
    }
}
export{calcular, removerprodutos};