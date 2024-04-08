9. //Faça um script para somar dois números e multiplicar o resultado pelo primeiro número.

const prompt = require("prompt-sync")();

const numero1 = Number(prompt("Digite o primeiro número: "));
const numero2 = Number(prompt("Digite o segundo número: "));

const soma = numero1 + numero2;

const resultado = soma * numero1;

console.log(`O resultado é : ${resultado.toFixed(2)}`);