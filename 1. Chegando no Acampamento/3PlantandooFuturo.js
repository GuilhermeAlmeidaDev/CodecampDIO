//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let id = parseInt(gets());

//TODO: Print no console se a semente deve ser plantada ou se o buraco deve
//avançar ou retroceder X metros
let dist = 0;
if (id == 10) {
  console.log("Plantar!");
} else if (id < 10) {
  dist = 10 - id;
  console.log("O buraco deve avançar " + dist + " metros");
} else {
  dist = id - 10;
  console.log("O buraco deve retroceder " + dist + " metros");
}