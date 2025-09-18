function idade(nome, anoNasc, anoAtual) {

    idade = anoAtual - anoNasc;
    return `Olá, ${nome}! Em 2025 você terá ${idade} anos.`;
}

//exportamos a função para que possa ser usada em outros arquivos
module.exports = {
    idade
    
};