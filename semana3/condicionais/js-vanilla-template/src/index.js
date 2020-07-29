//EXERCICIO 1
//O codigo solicita um numero do usuario, armazena esse valor numa variavel transformando o tipo em number,
//verifica se o numero é par. Para resultados true, ou seja, numero par ele imprime no console 'passou no teste',
//para resultados false, ou seja, numero impar ele imprime no console 'não passou no teste'.

//EXERCICO 2
//A
//Serve para avaliar condições iguais. Ele verifica o valor informado pelo usuario caso a caso e imprime 
//no console o condição que for true.
//B
//O preço da fruta maçã é R$ 2.25
//C
//O preço da fruta pêra é R$ 5.50 
//O preço da fruta é R$ 5

//EXERCICIO 3
//A
//Solicitando um numero do usuario e transformado o valor em tipo Number
//B
//Esse numero passou no teste
//erro
//C
//Sim. Pois a variavel que esta dentro do escopo filho não pode ser acessada pelo escopo pai

//EXERCICIO 4
//let idadeUsuario = Number(prompt("Informe sua idade"))
//
//if(idadeUsuario >= 18) {
//    console.log("Você pode dirigir")
//} else{
//    console.log("Você não pode dirigir")
//}

//EXERCICIO 5
//let turnoUsuario = prompt("Qual turno você estuda. Digite M para manhã, V para tarde e N para noite")
//
//if (turnoUsuario === "m"){
//    console.log("Bom dia!")
//} else if(turnoUsuario === "v"){
//    console.log("Boa tarde!")
//} else if(turnoUsuario === "n"){
//    console.log("Boa noite!")
//} else{
//    console.log("Digite um turno válido")
//}

//EXERCICIO6 6
//let turnoUsuario = prompt("Qual turno você estuda. Digite M para manhã, V para tarde e N para noite")
//
//switch (turnoUsuario){
//    case "m":
//        console.log("Bom dia!")
//        break
//    case "v":
//        console.log("Boa tarde!")
//        break
//    case "n":
//        console.log("Boa noite!")
//        break
//    default:
//        console.log("Digite um turno válido")    
//}

//EXERCICIO 7
//
//let generoFilme = prompt("Qual gênero deseja assitir?")
//let precoIngresso = prompt("Qual valor da entrada?")
//
//if(generoFilme === "fantasia" && precoIngresso <= "15"){
//    console.log("Bom filme!")
//} else{
//    console.log("Escolha outro filme :(")
//}

//DESAFIO 1

//let generoFilme = prompt("Qual gênero deseja assitir?")
//let precoIngresso = prompt("Qual valor da entrada?")
//
//if(generoFilme === "fantasia" && precoIngresso <= "15"){
//    let snack = prompt("Qual snack você vai comprar?")
//    console.log("Bom filme!", "...com", snack)
//} else{
//    console.log("Escolha outro filme :(")
//}

//DESAFIO 2

//let nomeUsuario = prompt("Digite seu nome:")
//let tipoDeJogo = prompt("Qual tipo de jogo? Digite 'in' para internacional e 'do' para domestico:")
//let etapaDeJogo = prompt("Qual etapa do jogo? 'sf' indica semi-final; 'dt' indica decisão de terceiro lugar; e 'fi indica final")
//let categoria = prompt("Digite a categoria; 1, 2, 3 ou 4")
//let qtdIngresso = prompt("Digite quantidade de ingresso")
//
//console.log("---Dados da Compra---")
//console.log("Nome do cliente:",nomeUsuario)
//console.log("Tipo do jogo:",tipoDeJogo)
//console.log("Etapa do jogo:",etapaDeJogo)
//console.log("Categoria:",categoria)
//console.log("Quamtidade de ingressos:",qtdIngresso)
//console.log("---Valores---")
//
//if(tipoDeJogo === "do" && categoria === "1" && etapaDeJogo === "sf"){
//    console.log("Valor do ingresso: R$ 1320")
//    valorTotal = qtdIngresso * 1320
//    console.log("Valor total: R$",valorTotal)
//} else if(tipoDeJogo === "do" && categoria === "2" && etapaDeJogo === "sf"){
//    console.log("Valor do ingresso: R$ 880")
//    valorTotal = qtdIngresso * 880
//    console.log("Valor total: R$",valorTotal)
//} else if(tipoDeJogo === "do" && categoria === "3" && etapaDeJogo === "sf"){
//    console.log("Valor do ingresso: R$ 550")
//    valorTotal = qtdIngresso * 550
//    console.log("Valor total: R$",valorTotal)
//} else if(tipoDeJogo === "do" && categoria === "4" && etapaDeJogo === "sf"){
//    console.log("Valor do ingresso: R$ 220")
//    valorTotal = qtdIngresso * 220
//    console.log("Valor total: R$",valorTotal)
//} else if(tipoDeJogo === "do" && categoria === "1" && etapaDeJogo === "dt"){
//    console.log("Valor do ingresso: R$ 660")
//    valorTotal = qtdIngresso * 660
//    console.log("Valor total: R$",valorTotal)
//} else if(tipoDeJogo === "do" && categoria === "2" && etapaDeJogo === "dt"){
//    console.log("Valor do ingresso: R$ 440")
//    valorTotal = qtdIngresso * 440
//    console.log("Valor total: R$",valorTotal)
//} else if(tipoDeJogo === "do" && categoria === "3" && etapaDeJogo === "dt"){
//    console.log("Valor do ingresso: R$ 330")
//    valorTotal = qtdIngresso * 330
//    console.log("Valor total: R$",valorTotal)
//} else if(tipoDeJogo === "do" && categoria === "4" && etapaDeJogo === "dt"){
//    console.log("Valor do ingresso: R$ 170")
//    valorTotal = qtdIngresso * 170
//    console.log("Valor total: R$",valorTotal)
//} else if(tipoDeJogo === "do" && categoria === "1" && etapaDeJogo === "fi"){
//    console.log("Valor do ingresso: R$ 1980")
//    valorTotal = qtdIngresso * 1980
//    console.log("Valor total: R$",valorTotal)
//} else if(tipoDeJogo === "do" && categoria === "2" && etapaDeJogo === "fi"){
//    console.log("Valor do ingresso: R$ 1320")
//    valorTotal = qtdIngresso * 1320
//    console.log("Valor total: R$",valorTotal)
//} else if(tipoDeJogo === "do" && categoria === "3" && etapaDeJogo === "fi"){
//    console.log("Valor do ingresso: R$ 880")
//    valorTotal = qtdIngresso * 880
//    console.log("Valor total: R$",valorTotal)
//} else if(tipoDeJogo === "do" && categoria === "4" && etapaDeJogo === "fi"){
//    console.log("Valor do ingresso: R$ 330")
//    valorTotal = qtdIngresso * 330
//    console.log("Valor total: R$",valorTotal)
//}
    

