let listaDePecas = ["Filtro de Ar", "Motor", "Disco de freio"]

if (listaDePecas.length< 10)
 {
console.log(" É possivel cadastrar mais peças!!!")
}
else
{
    console.log("Capacidade insuficiente, não é ´possivel cadastrar")
}
let peso = 100


if(peso < 100)
{
    console.log("A peça deve pesar no minimo 100g")
}
else
{
    console.log("A peça possui o peso adequado")
}

let nomePeca = "Disco de freio"

/*if (nomePeca.length >= 3) {
    console.log("Nome da peça adequado para cadastro.")
    
}
else if (nomePeca.length == 0)
{
    console.log("Nome da peça não pode ser vazio")
}
else
{
    console.log("O nome da peça deve ter ao menos 3 caracterespara ser cadastrado")
}*/

// = atribuição de valor
// == verificar se os valores ~soa iguais
// === verificar se os valores são identicos (tem que ser do mesmo tipo)

switch (nomePeca.length) {
    case 0:
        console.log("Nome da peça não pode ser vazio")
         break;
         case 1:
         case 2:
             console.log("O nome da peça deve ter ao menos 3 caracteres para ser cadastrado")
             break;
             

    default:
        console.log("Nome da peça adequado para cadastro")
        break;
}