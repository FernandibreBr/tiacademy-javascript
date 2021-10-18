let frutas = [
    {fruta: "maçã", preco: 6.10},
    {fruta: "melão", preco: 3.35},
]

function listafrutas(f){
   for( let produto of f){
    for(let p in produto){
        console.log(` ${p}  ${produto[p]}`)
    }
} 
}

listafrutas(frutas)
