module.exports = {
  gerarMensagemPersonalizada: (nome, idade, aura) => {
    let faixaEtaria;

    if (idade < 12) {
      faixaEtaria = "criança";
    } else if (idade < 18) {
      faixaEtaria = "adolescente";
    } else if (idade < 60) {
      faixaEtaria = "adulto";
    } else {
      faixaEtaria = "idoso";
    }

    if (aura < 100000) {
      aura = "alfa";
    } else if (aura < 200) {
      aura = "beta";
    } else if (aura < 100) {
      aura = "omega";
    }

    return `Olá, ${nome}! Você é um(a) ${faixaEtaria}.`;
  }
};
