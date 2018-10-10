const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end('First back-end');
});

server.listen(3000, () => {
  console.log('server at 3000');
});