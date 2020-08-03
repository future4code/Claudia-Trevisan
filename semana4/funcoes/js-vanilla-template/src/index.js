//EXERCICIO 1
//a
// 10 e 50

//b
//nada

//EXERCICIO 2
//a
//DARVAS
//GOLI
//JOAO

//b
//Amanda, caio 

//EXERCICIO 3
//Eu não entendi muito bem. mas parece que a função cria uma variavel que é um array vazio
// e entra no for of que verifica se os valores contidos no parametro são par, se forem 
//ele insere o valor dentro da variavel array vazio que foi criado e depois retorna o valor do array que foi criado.
//acho que o argumento poderia ter o nome: numeros e a variavel criada poderia ter o nome de numeros pares.

//EXERCICIO 4
//a
//const sobreMim = () =>{
//    console.log("Eu sou Claudia, tenho 32 anos, moro em Pernambuco e sou estudante")
//}
//
//sobreMim()

//b
//let sobreMim = (informacoes) =>{
//    let imprimeEu = []
//    for (let x of informacoes){
//        imprimeEu.push(x)
//    }
//    console.log("Eu sou", imprimeEu[0], "tenho", imprimeEu[1], "moro em", imprimeEu[2], "e", imprimeEu[3], "estudante")
//}
//const eu = ["Claudia", 32, "Pernambuco", "sou"]
//let retornoInformacoes = sobreMim(eu)

//EXERCICIO 5
//a
//const numeros = (numero1, numero2) =>{
//    let soma = numero1 + numero2
//    return soma
//}
//
//let resultado = numeros(10, 60)
//console.log(resultado)

//b
//const numeros = (numero1, numero2) =>{
//    if(numero1 >= numero2){
//        let verdade = "É maior ou igual ao segundo"
//    }
//    return verdade
//}
//
//numeros(30,10)

//c
let mensagem = (frase) =>{
    for(let x = 1; x <= 10; x++){
        console.log (frase)
    }
    return frase
}
 
let a = mensagem("eu sei escrever")

let b = 33
for (let c = 1; c <= 10; c++){
    console.log (b)
}