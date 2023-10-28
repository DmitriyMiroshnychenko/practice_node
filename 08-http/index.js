const http = require('http');
const { getHTML, getComments, getText, handleNotFound } = require('./handlers');

const PORT = 5000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/html') {
    return getHTML(req, res);
  }
  if (req.method === 'GET' && req.url === '/text') {
    return getText(req, res);
  }
  if (req.method === 'GET' && req.url === '/comments') {
    return getComments(req, res);
  }
  handleNotFound(req, res);
});
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
