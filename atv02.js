// 2. Escreva um script para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

const prompt = require('prompt-sync')();

const eleitores= Number(prompt(" Digite um numero total de eleitores: "));
const brancos = Number(prompt("digite o numero de votos em branco: "));
const nulos = Number(prompt("digite o numero de votos nulos: "));
const validos = Number(prompt("digite o numero de votos validos: "));

const valorBranco = (brancos / eleitores ) * 100;  
const valorNulos = (nulos / eleitores ) * 100;
const valorValidos = (validos / eleitores ) * 100; 

console.log(`Percentual de votos em branco: ${valorBranco.toFixed(2)}%`);
console.log(`Percentual de votos nulos: ${valorNulos.toFixed(2)}%`);
console.log(`Percentual de votos em branco: ${valorValidos.toFixed(2)}%`);