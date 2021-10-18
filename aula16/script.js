window.onload = function(){
    const ulpai= document.querySelectorAll("#ulpai");
    
    ulpai.forEach(function(lista){
    lista.addEventListener('click', function(elemento){
        alert(elemento.target.innerHTML);
    })    
    })
}