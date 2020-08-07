//EXERCICIOS DE INTERPRETAÇÃO

//1
//Uma função criada com nome de conversorDeMoeda que tem como parametro um valor a ser armazenado, 
//recebe uma informação do usuario em formato de numero da cotação do dolar e retorna na função o parametro multiplicado
//pelo valor inserido pelo usuario. A variavel meuDinheiro chama a função e informa como parametro o valor 100. No console será
//impresso o texto R$ + resultado da função que foi calculado o valor do parametro multiplicado pelo valor informado no prompt.

//2
//A função investeDinheiro tem dois parametros onde tipoDeInvestimento e valor; cria uma variavel valorAposInvestimento e entra
// no laço switch case que envolve o parametro tipoDeInvestimento onde se poupança for true valorAposInvestimento recebe o parametro valor
//multiplicado por 1.03; se for false verifica se Renda Fixa é true, se for valorAposInvestimento recebe o parametro valor multiplicado por 1.05;
//se for false verifica se CDB é true, se for true valorAposInvestimento recebe o parametro valor multiplicado por 1.06; se for false verifica
//se Ações é true, se for true valorAposInvestimento recebe o parametro valor multiplicado por 1.1; se for false o laço tem por default um alert
//que diz que o tipo de investimento informado é incorreto. Retorna dentro da função a variavel valorAposInvestimento.
//A variavel novoMontante invoca a função investeDinheiro com os parametros Ações e 150.
//A variavel segundoMontante invoca a função investeDinehiro com os parametros Tesouro Direto e 200.
//No console será impresso 165 e em uma nova linha a frase Tipo de investimento informado incorreto.

//3
//tres variaveis de array são criadas uma contendo 14 indices e as outras duas vazias.
//O laço for.. of percorre o array preenchido e verifica se o valor de cada indice é par, se for par o valor
//é inserido no array1, se não for par o valor é inserido no array2.
//No console é impresso a quantidade total de indices do array, na linha de baixo a quantidade de indices do array1
//e na linha abaixo o total de indices do array2.

//4
//Uma variavel numeros com array de 25 indices, outra variavel numero1 que recebe infinity e outra numero2 que recebe 0.
//entra no laço for ..of que verifica se o menor valor do array é menor que a variavel numero1, se for, 
//a variavel numero1 recebe o valor do indice do array ate encontrar o valor minimo.
//o mesmo laço verifica se o maior numero do array é maior que o valor da variavel numero2, se for 
//a variavel numero2 recebe o valor do indice do array ate encontrar o valor maximo.
//No console será impresso o menor numero do array e na linha abaixo o maior.

//Bloco2
//1
//As tres maneiras são .forEach, .map e .filter.

//let array1 = [145, 1, 5, 90, 34, 85, 77]
//const exemplo1 = (elementoDoArray, index, array) =>{
//   array[index] = elementoDoArray*2 
//}
//
//array1.forEach(exemplo1)
//
//console.log(array1)

//let array2 = [145, 1, 5, 90, 34, 85, 77]
//const exemplo2 = (elementoDoArray, index, array) =>{
//   return  elementoDoArray*3 
//
//}
//
//const modificaArray = array2.map(exemplo2)
//console.log(modificaArray)

//let array3 = [145, 1, 5, 90, 34, 85, 77]
//const exemplo3 = (elementoDoArray, index, array) =>{
//    if(elementoDoArray % 2 !== 0){
//        return true
//    }
//    return false
//}
//
//const soImpar = array3.filter(exemplo3)
//console.log(soImpar)

//2 - a
//False

//b
//True

//c
//True

//d
//True

//e
//True

//3
//Não funciona porque não incrementa o i, vira um loop infinito.
//const quantidadeDeNumerosPares = 3
//let i = 1
//while(i <= quantidadeDeNumerosPares) {
//  console.log(i*2)
//  i++
//}

//4
const verificaLados = (a, b, c) =>{
    
}
