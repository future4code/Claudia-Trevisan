//A
// const minhaString: string = "manuel". Ao tentar atribuir um numero  variavel
//o typescript avisa que o tipe não compativel com o valor atribuido.
//B
// const meuNumero: number | string = "joana"
//C, D, E
enum CORES_DO_ARCO_IRIS {
    AMARELO = "Amarelo",
    VIOLETA = "Violeta",
    ANIL = "Anil",
    AZUL = "Azul",
    VERDE = "Verde",
    LARANJA = "Laranja",
    VERMELHO = "Vermelho"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: CORES_DO_ARCO_IRIS
}

const pessoa1: pessoa = {
    nome: "Leticia",
    idade: 21,
    corFavorita: CORES_DO_ARCO_IRIS.ANIL
};
const pessoa2: pessoa = {
    nome: "Lucia",
    idade: 25,
    corFavorita: CORES_DO_ARCO_IRIS.AMARELO
};
const pessoa3: pessoa = {
    nome: "Julia",
    idade: 18,
    corFavorita: CORES_DO_ARCO_IRIS.AZUL
};

