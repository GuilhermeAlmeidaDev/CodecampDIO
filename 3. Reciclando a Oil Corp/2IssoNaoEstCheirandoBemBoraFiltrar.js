//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let lista1 = gets().split(', ');
let lista2 = gets().split(', ');
let lista3 = gets().split(', ')

let arr = [lista1, lista2, lista3]

let qualFiltro = false;
let qualMolecula;

// TODO: Print no console qual filtro deve ser utilizado de acordo com as moléculas prejudiciais avaliadas no teste.

if (arr.flat().includes("NO2")) {
  console.log("Filtro Específico para a Molécula NO2");
} else if (arr.flat().includes("SO2")) {
  console.log("Filtro Específico para a Molécula SO2");
} else if (arr.flat().includes("CO")) {
  console.log("Filtro Específico para a Molécula CO");
} else if (arr.flat().includes("FHO")) {
  console.log("Filtro Específico para a Molécula FHO");
} else {
  console.log("Filtro Simples");
}