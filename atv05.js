// 5. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Escreva um script para ler o custo de fábrica de um carro, a porcentagem do distribuidor e o imposto, e calcular e escrever o custo final ao consumidor

const prompt = require("prompt-sync")();

const custoFabrica = Number(prompt("Digite o custo de fábrica do carro: "));
const percentualDistribuidor = Number(prompt("Digite a porcentagem do distribuidor: "));
const imposto = Number(prompt("Digite a porcentagem do imposto: "));

const custoDistribuidor = (custoFabrica * percentualDistribuidor) / 100;
const custoImposto = (custoFabrica * imposto) / 100;

const custoFinal = custoFabrica + custoDistribuidor + custoImposto;

console.log(`O custo final ao consumidor é: R$ ${custoFinal.toFixed(2)}`);
