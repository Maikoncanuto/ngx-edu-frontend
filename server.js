// Instala o servidor expresso
const express = require ('express');
const path = require('path');

const app = express ();

// Serve apenas os arquivos estáticos que formam o diretório dist
app.use (express.static (__dirname + '/dist/ngx-admin'));

app.get ('/*', function (req, res) {
    
res.sendFile (path.join (__dirname + '/dist/ngx-admin/index.html'));
});

// Inicie o aplicativo ouvindo na porta padrão do Heroku
app.listen (process.env.PORT || 8080);