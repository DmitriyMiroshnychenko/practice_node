const http = require('http');

const PORT = 5000;

const server = http.createServer((req, res) => {
  console.log(req);
  res.end('Greeting from the HTTP server!');
});
server.listen(PORT, () => {
  console.log(`Server was launched on port ${PORT}`);
});
