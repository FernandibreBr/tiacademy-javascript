window.onload=function(){
    let produtos = [
        {descricao:'biscoito', preco:2.20},
        {descricao:'marmelada', preco:3.20},
        {descricao:'sabonete', preco:4.20},
        {descricao:'pamonha', preco:1.80},
    ]
    const listaprodutos = document.querySelector("#listaprodutos");
    const total = document.querySelector("#total");
    (()=>{
        let totalzinho=0;
        for(let pro of produtos){
            const filholi = document.createElement('li');
            for(listap in pro){
                if(listap == 'preco'){
                    listaprodutos.appendChild(filholi).setAttribute('data-preco', pro[listap]);
                    totalzinho+= pro[listap];
                } else{
                    listaprodutos.appendChild(filholi).textContent=`${pro[listap]}`;
                }
                //console.log(pro[listap])
            }
        }
        total.value = totalzinho.toFixed(2);
    })(produtos)
}