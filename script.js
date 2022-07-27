const frutas = [
  { name: "Laranja", count: 5 },
  { name: "Banana", count: 2 },
  { name: "Maçã", count: 9 },
  { name: "Uva", count: 4 },
  { name: "Goiaba", count: 5 },
];

const mincount = 6;

const frutasPertoDeAcabar = frutas.reduce((ac, item) => {
  if (item.count < mincount) {
    console.log(item.name);
  }
}, "");

console.log(frutasPertoDeAcabar); 

// ERRO: ESTÁ RETORNANDO UM UNDEFINED NO FINAL




///     EXERCICIOS

// Descobrir quantas pessoas são do signo de cancer
const pessoas = [
  { name: "Pedro", sign: "Gemeos" },
  { name: "Lucas", sign: "Cancer" },
  { name: "Andre", sign: "Cancer" },
  { name: "Julio", sign: "Sargitario" },
  { name: "Luma", sign: "Aries" },
  { name: "Alvaro", sign: "Cancer" },
  { name: "Leticia", sign: "Cancer" },
  { name: "Juliana", sign: "Aquario" },
];

const cancer = pessoas.reduce((acc, { sign }) => {
  if (sign === "Cancer") {
    acc += 1;
  }
  return acc;
}, 0);

console.log(cancer);
