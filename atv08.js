//8. Faça um script que determine o volume de uma caixa d’água cilíndrica, sendo que o raio e a altura devem ser fornecidos.

const prompt = require("prompt-sync")();

const raio = Number(prompt("Digite o raio da caixa de água: "));
const altura = Number(prompt("Digite a altura da caixa de água: "));

const volume = Math.PI * Math.pow(raio, 2) * altura;


console.log(`volume da caixa de água é : ${volume.toFixed(2)}m`);