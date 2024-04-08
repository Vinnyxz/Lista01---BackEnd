// 6. Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um script que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.

const prompt = require("prompt-sync")(); 
    
const salarioFixo = Number(prompt("Digite o salário fixo do vendedor: "));
const carrosVendidos = Number(prompt("Digite quatos carros foram vendidos: "));
const valorTotalVendas = Number(prompt("Digite o valor total das vendas: "));
const valorPorCarro = Number(prompt("Digite o valor que o vendedor recebe por carro vendido: "));


    const comissao = carrosVendidos * valorPorCarro;
    
    const comissaoPorVendas = 0.05 * valorTotalVendas;
    
    const salarioFinal = salarioFixo + comissao + comissaoPorVendas;
    

console.log(`O salário final do vendedor é: R$ ${salarioFinal.toFixed(2)}`);
