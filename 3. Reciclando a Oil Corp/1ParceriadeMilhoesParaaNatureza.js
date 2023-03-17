//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const arr = gets().split(', ')

//TODO: Print no console qual filtro deve ser utilizado de acordo com as moléculas na entrada

const maiorMol = arr.reduce((maior, atual) => {
  if (atual.length > maior.length) {
    return atual;
  } else {
    return maior;
  }
}, "");

if (maiorMol.length <=5) {
  console.log("O filtro deve ser: Filtro Normal");
} else if (maiorMol.length > 5 && maiorMol.length <= 10) {
  console.log("O filtro deve ser: Filtro Específico");
} else {
  console.log("O filtro deve ser: Filtro Duplo Específico");
}
