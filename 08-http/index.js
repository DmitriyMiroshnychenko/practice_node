const http = require('http');

const PORT = 5000;

const comments = [
  { id: '100', text: 'This first comment', author: 'Dmytro' },
  { id: '200', text: 'Second first comment', author: 'Alice' },
  { id: '300', text: 'Last first comment', author: 'Bob' },
];

const server = http.createServer((req, res) => {
  if (req.url === '/http') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><body><div>');
    res.write('<h1>Greetings from the HTTP server!</h1>');
    res.write('</div></body></html>');
    return res.end();
  }
  if (req.url === '/text') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('This is plain text');
  }
  if (req.url === '/json') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify(comments));
  }

  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Not Found');
});

server.listen(PORT, () => {
  console.log(`Server was launched on port ${PORT}`);
});
