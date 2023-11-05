const express = require('express');

const app = express();

const getRootHandler = (req, res) => {
  res.send('Get root route');
};
//Coments
const getCommentsHandler = (req, res) => {
  res.send('Get comments route');
};
const getSingleCommentHandler = (req, res) => {
  res.send(`Get comment route. CommentId ${req.params.commentId}`);
};
const postCommentsHandler = (req, res) => {
  res.send('Post comments route');
};
const deleteCommentHandler = (req, res) => {
  res.send(`Delete comment route. CommentId ${req.params.commentId}`);
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

// app.route('/comments').get(getCommentsHandler).post(postCommentsHandler);

//Comments

app.get('/users', getUsersHandler);
app.post('/users', postUsersHandler);
app.get('/users/:uaerId', getSingleUserHandler);

app.listen(5000, () => console.log('Server was started on port 5000'));
