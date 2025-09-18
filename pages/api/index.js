const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/markdown'});
  res.end(`# KailashSatkuri-warangal\n\nHello! This is your README content.`);
});

server.listen(process.env.PORT || 3000);