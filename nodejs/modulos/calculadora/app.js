const funcoesMatematicas = require ('./funcoes_matematicas');
const calculadora_idade = require ('./calculadora_idade');

// Exemplo de uso das funções matemáticas
const resultadoSoma = funcoesMatematicas.somar(5, 3, 5);
console.log(`Resultado da soma: ${resultadoSoma}`);


const resultadoSubtracao = funcoesMatematicas.subtrair(10, 4);
console.log(`Resultado da subtração: ${resultadoSubtracao}`);

const resultadoMultiplicacao = funcoesMatematicas.multiplicar(7, 7);
console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);

const resultadoDivisao = funcoesMatematicas.dividir(7, 7);
console.log(`Resultado da divisão: ${resultadoDivisao}`);     

const idade = calculadora_idade.idade("ANNNAAA", 2009, 2050);
console.log(idade);