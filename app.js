const compression = require('compression');
const express = require('express');
const http = require('http');

const app = express();

app.use(compression(express.static('dist')));
//app.use(compression(express.static('dist/assets')));

app.get('/', (req, res) => {
  res.sendFile(index.html);
})

const port = process.env.PORT || '3001';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('Running'));
