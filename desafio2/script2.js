window.onload=function(){
    function resultadocep(dadoscep){
        for(let campo in dadoscep){
            if(document.querySelector(`#${campo}`)){
                document.querySelector(`#${campo}`).value=dadoscep[campo];
            }
        }
    }
     let dadoscep= async function(cep){
         let url= `https://viacep.com.br/ws/${cep}/json/`;
      try{  let dadosfetch= await fetch(url);
         let dadosjson = await dadosfetch.json();
     resultadocep(dadosjson);} 
       catch(error){
           alert(error);

       }
     }
     
     
     // dadoscep('87053660');
     const btnbuscar = document.querySelector("#buscarcep");
     const cep_ = document.querySelector("#CEP");
     btnbuscar.addEventListener('click', function(){
     dadoscep(cep_.value);
     })
 }