/*sera impresso o valor da variavel b que é igual a 10, depois será impresso o valor de a que é igual a 10 e o de b 
que recebeu valor igual a 5*/

//supondo que se trate de uma variavel LET o console imprimirá b,c e a//

let nome 
let idade 

console.log(typeof(nome, idade))
//O tipo undefined foi impresso pois as variaveis estão sem valor//

const nome1 = prompt ("Qual o seu nome?")
let idade1 = prompt ("Qual sua idade?")

console.log(nome1, idade1)
console.log(typeof(nome1, idade1))
//Notei que todas as vezes que fui verificar ele repetiu o prompt e o tipo das variaveis ficaram com string//
console.log("Olá", nome1,",você tem", idade1, "anos.")

const cor = prompt ("Qual sua cor favorita?")
let profissao = prompt ("Qual sua profissão?")
const calcado = prompt ("Quanto você calça?")
let comida = prompt ("Qual seu prato preferido?")
const filme = prompt ("Qual seu filme preferido?")

console.log("Qual sua cor favorita?")
console.log("Resposta:",cor)

console.log("Qual sua profissão?")
console.log("Resposta:",profissao)

console.log("Quanto você calça?")
console.log("Resposta:",calcado)

console.log("Qual seu prato preferido?")
console.log("Resposta:",comida)

console.log("Qual seu filme preferido?")
console.log("Resposta:",filme)

let delicias = ["pizza", "lasanha", "churrasco", "esfiha", "sorvete"]

console.log(delicias)

console.log("Essas são minhas comidas preferidas:")
console.log(delicias[0])
console.log(delicias[1])
console.log(delicias[2])
console.log(delicias[3])
console.log(delicias[4])

const comidaUsuario = prompt("Qual sua comida preferida?")
delicias[1] = comidaUsuario
console.log(delicias)

let perguntas = ["você está usando azul hoje?", "Você está vivo hoje?", "Você gosta de gatos?"]
let resposta1 = false
let resposta2 = true
let resposta3 = true

console.log(perguntas[0], resposta1)
console.log(perguntas[1], resposta2)
console.log(perguntas[2], resposta3)