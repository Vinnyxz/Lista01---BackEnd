// 3. Escreva um script para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.


const prompt = require('prompt-sync')();

const salarioAtual = Number(prompt("Digite o valor do seu Salário Atual "));
const percentualReajuste =  Number(prompt("Digite o percentual de reajuste "));

const reajuste = percentualReajuste / 100;
const valorReajuste = salarioAtual * reajuste;
const salarioNovo = salarioAtual + valorReajuste
console.log(`O valor do salario novo é: R$ ${salarioNovo.toFixed(2)}`);