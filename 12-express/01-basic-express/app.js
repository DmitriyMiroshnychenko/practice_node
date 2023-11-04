// const http = require('http');
// const server = http.createServer((req, res) => {
//   res.end(' Response From the server');
// });
// server.listen(5000, () => console.log('Server was started on port 5000'));

// const http = require('http');
const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Response from express'));
app.listen(5000, () => console.log('Server was started on port 5000'));

// const server = http.createServer(app);
// server.listen(5000, () => console.log('Server was started on port 5000'));
