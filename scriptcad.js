var listadePeça = ["Filtro de Ar", "Motor", "Amortecedor"]
if (listadePeça.length < 10) {
    //é possível cadastrar à peça
    console.log("É possìvel cadastrar mais peças")
    } else {
        console.log("Não tem mais espaço na lista")
    } 


    //peso mínimo de 100g
    let peso = 50;
    if(peso < 100){
        console.log("A peça deve pesar no mínimo 100g")
    } else {
        console.log("A peça possue peso adequado")
    }


    //número de caracteres
    let nomePeça = "Disco de Freio"
    if(nomePeça.length > 3){
        console.log("Nome da peça é adequado para cadastro")
    } else if(nomePeça.length ==0) {
        console.log("O nome da peça não pode ser vazio")
    } else {
        console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado")
    }


switch(nomePeça.length) {
    case 0:
        console.log("O nome deve ter, pelo menos, 3 caracteres. Digite um nome adequado")
    case 1:
    
    case 2:
    
    case 3:

    default:
        console.log("O nome da peça está pronta para o cadastro!")
}