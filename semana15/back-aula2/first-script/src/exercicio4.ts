type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//A Utilizaria o comando tsc + nome do arquivo
//B Teria que especificar o caminho do arquivo antes do arquivo, no package
//C pode especificar no arquivo package ou apenas rodar o comando tsc + nomes dos arquivos separados por espaço.
//D alem das partes comentdas e descomentadas não encontrei nada...