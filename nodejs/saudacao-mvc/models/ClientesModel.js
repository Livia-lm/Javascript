module.exports = {
  verificarLogin: (login, senha) => {
    let acesso;
    

    if (login === "Laura" && senha === "12345") {
      acesso = "Logado com sucesso!";
    } else {
      acesso = "Negado: Login ou senha incorretos.";
    }

    
      
    return `Olá, ${login} seu acesso foi: ${apelido}!`;
  }
};