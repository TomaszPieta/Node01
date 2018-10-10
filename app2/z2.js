const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  const browser = req.headers['user-agent'];
  res.end('Browser', browser);
});

server.listen(3000, () => {
  console.log('server at 3000');
});