const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para arquivos estáticos
app.use(express.static('public'));

// Middleware para ler dados de formulários
app.use(express.urlencoded({ extended: true }));

// Rotas
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

const usersRoutes = require('./routes/usuarios');
app.use('/users', usersRoutes);

const produtosRoutes = require('./routes/produtos');
app.use('/produtos', produtosRoutes);

const camisetasRoutes = require('./routes/produtos');
app.use('/produtos/camisetas', camisetasRoutes);

// Servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

