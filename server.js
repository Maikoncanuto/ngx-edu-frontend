// Instala o servidor expresso
const express = require ('express');
const path = require('path');

const app = express ();

// Serve apenas os arquivos estáticos que formam o diretório dist
console.log('Passo 1 - express.static: /dist/');
app.use (express.static (__dirname + '/dist/'));

console.log('Passo 1 - app.get: /*');
app.get ('/*', function (req, res) {
    res.sendFile (path.join (__dirname + '/dist/index.html'));
});

// Inicie o aplicativo ouvindo na porta padrão do Heroku
app.listen (process.env.PORT || 8080);
console.log('process.env.PORT: ' + process.env.PORT);