const fs = require('fs');


// Lendo um arquivo de forma assíncrona
fs.readFile('myfile.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }
  console.log('Conteúdo do arquivo:', data);
});

console.log('Leitura do arquivo iniciada...');