const compression = require('compression');
const express = require('express');
const http = require('http');
var path = require('path');

const app = express();

app.use(compression())
app.use(express.static('dist'));

app.get(['/', '/home', '/collection', '/cv'], (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '/dist') });
})

const port = process.env.PORT || '8080';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('Running'));
