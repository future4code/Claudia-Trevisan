type estatisticas = {
    maior: number,
    menor: number,
    media: number
}

type amostraDeDados = {
    numeros: Array<number>,
    obterEstatisticas: (numeros: Array<number>) => estatisticas
}

function obterEstatisticas(numeros: Array<number>) : estatisticas {

    const numerosOrdenados: Array<number> = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}