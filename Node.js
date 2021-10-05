const listaDePecas = [ "pecas de teste", "ab", "peca b"]

console.log ("quantidades de caracteres")

if (listaDePecas.length <= 10){
    console.log("as peças podem ser cadastradas")
}

for (let index = 0; index < listaDePecas.length; index++) {
    const pecaAtual = listaDePecas[index];
    if(pecaAtual.length <= 3){
    console.log("Peça não pode ser cadastrada");
    }else{
    console.log("peça pode ser cadastrada");   
    }

}


console.log("Peso da peça: ");

const PesoDaPeça=50;

if( PesoDaPeça<= 50){
    console.log("Peso da peça aceito")
}else{
    console.log("Peso da peça nao aceito")
}
