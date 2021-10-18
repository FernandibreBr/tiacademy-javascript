let m = 1;
try {
    if(typeof m != 'number') throw new Error("digite um numero");
    if(m<0) throw new Error("o número não pode ser negativo");
    if(m % 1 !==0) throw new Error("digite um número inteiro");
}
catch(error){
    console.log(`o erro é:.. ${error}`);
}   finally{
    console.log("cheguei no finally");
}