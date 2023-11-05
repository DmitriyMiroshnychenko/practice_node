import express from 'express';
import morgan from 'morgan';

const app = express();

// app.use(morgan('combined'));
// app.use(morgan('short'));

app.use(morgan('tiny'));

app.use((req, res, next) => {
  let data = '';
  req.on('data', (chunk) => (data += chunk));
  req.on('end', () => console.log(JSON.parse(data)));
  next();
});

app.use((req, res) => res.send('This is express server'));

app.listen(5000, () => console.log('Server is listening at port 5000'));
