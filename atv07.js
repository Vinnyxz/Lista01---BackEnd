// 7. Faça um script que leia duas notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 4 e 6.

const prompt = require("prompt-sync")();

const nota01 = Number(prompt("Digite a primeira nota do aluno: "));
const nota02 = Number(prompt("Digite a segunda nota do aluno: "));
const peso01 = 4 ;
const peso02 = 6 ;

const média = ( nota01 * peso01 + nota02 * peso02 ) / (peso01 + peso02 ) ;

console.log(`A média Final do Aluno x é : ${média.toFixed(2)}`);