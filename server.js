const compression = require('compression');
const express = require('express');
const http = require('http');

const app = express();

app.use(compression())
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(index.html);
})

const port = process.env.PORT || '8080';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('Running'));
