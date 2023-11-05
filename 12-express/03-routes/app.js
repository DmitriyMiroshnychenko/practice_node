const express = require('express');
const commentsRouter = require('./routes/comments');
const usersRouter = require('./routes/users');

const app = express();

const getRootHandler = (req, res) => {
  res.send('Get root route');
};

app.get('/', getRootHandler);
app.use('/comments', commentsRouter);
app.use('/users', usersRouter);

// app.route('/comments').get(getCommentsHandler).post(postCommentsHandler);

app.listen(5000, () => console.log('Server was started on port 5000'));
