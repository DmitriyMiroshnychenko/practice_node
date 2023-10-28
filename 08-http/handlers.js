const comments = require('./data');

function getHTML(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<html><body><div>');
  res.write('<h1>Greetings from the HTTP server!</h1>');
  res.write('</div></body></html>');
  return res.end();
}

function getText(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  return res.end('This is plain text');
}

function getComments(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  return res.end(JSON.stringify(comments));
}

function postComment(req, res) {
  let commentJSON = '';
  req.on('data', (chunk) => (commentJSON += chunk));
  req.on('end', () => {
    comments.push(JSON.parse(commentJSON));
    res.statusCode = 200;
    res.end('Comment data was received');
  });
}

function handleNotFound(req, res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html');
  return res.end('<h1>Page not found!</h1>');
}

module.exports = {
  getHTML,
  getText,
  getComments,
  postComment,
  handleNotFound,
};
