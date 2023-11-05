const express = require('express');
const commentsRouter = require('./routes/comments');

const app = express();

const getRootHandler = (req, res) => {
  res.send('Get root route');
};

//Users
const getUsersHandler = (req, res) => {
  res.send('Get users route');
};
const getSingleUserHandler = (req, res) => {
  res.send(`Get user route. UserId ${req.params.userId}`);
};
const postUsersHandler = (req, res) => {
  res.send('Post users route');
};

app.get('/', getRootHandler);
app.use('/comments', commentsRouter);

// app.route('/comments').get(getCommentsHandler).post(postCommentsHandler);

//Comments

app.get('/users', getUsersHandler);
app.post('/users', postUsersHandler);
app.get('/users/:uaerId', getSingleUserHandler);

app.listen(5000, () => console.log('Server was started on port 5000'));
