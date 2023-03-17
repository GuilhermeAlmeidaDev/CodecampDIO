//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let arr = gets().split(', ')

const list = {
    Reflorestamento: gets(),
    EsgotoTratado: gets(),
    EmissaoDeCarbono: gets(),
    EnergiaSustentavel: gets(),
}

const findItem = (object, index) => Object.keys(object).filter(item => item.toString() == index);

//TODO: Print no console "Multa", "Avaliação de progresso" ou "Não multar" dependendo do valor 
//de cada uma das chaves a serem verificadas da lista arr
arr.forEach(key => {
  if (list[key] === undefined) {
    console.log()
  } else if (list[key] === 'Não feito') {
    console.log("Multa");
  } else if (list[key] === 'Em progresso') {
    console.log("Avaliação de progresso");
  } else {
    console.log("Não multar");
  }
});