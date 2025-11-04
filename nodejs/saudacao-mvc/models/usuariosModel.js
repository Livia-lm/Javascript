module.exports = {
    
    gerarMensagemLogin: (login, senha) => {
        let acesso;

    if (login === 'Lívia' && senha === '12345') {
        acesso = 'Logado com sucesso';
    } else {
        acesso = 'Negado: Login ou senha incorretos.';
    }

    return `Ola ${login}! Seu acesso foi ${acesso}.`; 
    }
};