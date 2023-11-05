import express from 'express';
import morgan from 'morgan';
import qs from 'querystring';

const app = express();

// app.use(morgan('combined'));
// app.use(morgan('short'));

app.use(morgan('tiny'));

app.use(express.json());

app.use((req, res, next) => {
  if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
    let data = '';
    req.on('data', (chunk) => (data += chunk.toString()));
    req.on('end', () => {
      const parsedFormData = qs.parse(data);
      req.body = parsedFormData;
      next();
    });
  } else {
    next();
  }
});

// app.use((req, res, next) => {
//   let data = '';
//   req.on('data', (chunk) => (data += chunk));
//   req.on('end', () => {
//     const parsedJson = JSON.parse(data);
//     req.body = parsedJson;
//     next();
//   });
// });

app.use((req, res) => {
  console.log(req.body);
  return res.send('This is express server');
});

app.listen(5000, () => console.log('Server is listening at port 5000'));
