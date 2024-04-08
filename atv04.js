//4. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um script para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.

const prompt = require("prompt-sync")();

const custoFabrica = Number(prompt("Digite o custo de fábrica do carro: "));

const percentualDeDistribuidor =  0.28;
const percentualDeImpostos = 0.45;

const custoDistribuidor = custoFabrica + percentualDeDistribuidor;
const custoImpostos = custoFabrica * percentualDeImpostos;
const custoFinal = custoFabrica + custoDistribuidor + custoImpostos;

console.log(`O custo final ao consumidor é: R$ ${custoFinal.toFixed(2)}`);
