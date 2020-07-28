//1
//a. false
//b. false
//c. true
//e. boolean

//2
//a. undefined
//b. null
//c. 11
//d. 3
//e. 
//f. 9

///exercicio1
//a
//let idade1 = prompt("Qual sua idade?")
//b
//let idade2 = prompt("Qual a idade do seu/sua melhor amigo(a)?")
//c
//const diferenca = Number(idade1) - Number(idade2)
//let compare = (idade1) > (idade2)
//console.log("Sua idade é maior que a do seu/sua melhor amigo(a)? " + compare)
//d
//console.log(diferenca)

//exercicio2
//a
//let numeroPar = prompt("Insira um numero par")
//b
//let resto = Number(numeroPar) % 2
//console.log(resto)
//c Numeros pares não deixam restos
//d Ele realiza o calculo normalmente

//exercicio3
//a
/*let listaDeTarefas = []
//b
let tarefasUsuario1 = prompt("Cite três tarefas que você precisa realizar no dia")
let tarefasUsuario2 = prompt("Cite três tarefas que você precisa realizar no dia")
let tarefasUsuario3 = prompt("Cite três tarefas que você precisa realizar no dia")

listaDeTarefas.push(tarefasUsuario1, tarefasUsuario2, tarefasUsuario3)
//c
console.log(listaDeTarefas)
//d
let indiceJaRealizou = prompt("Me diga qual você ja realizou 0, 1 ou 2?")
//e
listaDeTarefas.splice(indiceJaRealizou, 1)
//f
console.log(listaDeTarefas)

//exercicio4
let emailDoUsuario = prompt("Para cadastrar, digite seu email")
let nomeDoUsuario = prompt("Digite seu nome")
console.log("O email " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vindo(a), " + nomeDoUsuario)*/

//Desafios
//1
//a
/*let unidadeF1 = 77
let conversao1 = (unidadeF1 - 32) * 5/9 + 273.15
console.log("77°F convertido em Kelvin é = " + conversao1 + "°K")
//b
let unidadeC2 = 80
let conversao2 = (80) * 5/9 + 32
console.log("80°C convertido em Fahrenheit é = " + conversao2 + "°F")
//c
let unidadeC3 = 30
let conversao3 = (30) * 5/9 + 32
let conversao4 = (conversao3 - 32) * 5/9 + 273.15
console.log("30°C convertido em Fahrenheit e em Kelvin é, respectivamente = " + conversao3 + "°F e " + conversao4 + "°K")
//d
let unidadeC4 = prompt("Insira a temperatura que deseja converter")
let conversao5 = Number(unidadeC4) * 5/9 + 32
let conversao6 = (conversao5 - 32) * 5/9 + 273.15
console.log(unidadeC4 + " convertido em Fahrenheit e em Kelvin é, respectivamente = " + conversao5 + "°F e " + conversao6 + "°K")*/

//2
//a e b
let energiaConsumida = 280
let valorPagar = energiaConsumida * 0.05
let desconto = valorPagar * 15 / 100
let valorPagarComDesconto = valorPagar - desconto
console.log("O valor a ser pago é: R$" + valorPagar + ",00. E com desconto será: R$" + valorPagarComDesconto + "0.")
//3
//a
let lb = 20
const equivaleKg = lb * 0.453592
console.log("20lb equivalem a " + equivaleKg + "Kg")
//b
let oz = 10.5
const equivaleKg2 = oz * 0.0283495
console.log("10.5oz equivalem a " + equivaleKg2 + "Kg")
//c
let mi = 100
const equivaleMt = mi * 1609.34
console.log("100mi equivalem a " + equivaleMt + "mt")
//d
let ft = 50
const equivaleMt2 = ft * 0.3048
console.log("50ft equivalem a " + equivaleMt2 + "mt")
//e
let gal = 103.56
const equivaleL = gal * 4.546
console.log("103.56gal equivalem a " + equivaleL + "l")
//f
let xic = 450
const equivaleL2 = xic * 0.24
console.log("450xic equivalem a " + equivaleL2 + "l")
//g
let ozUsuario = prompt("Digite o valor de oz que você deseja converter para Kg")
const equivaleKg3 = ozUsuario * 0.0283495
console.log(ozUsuario + "oz equivalem a " + equivaleKg3 + "Kg")









