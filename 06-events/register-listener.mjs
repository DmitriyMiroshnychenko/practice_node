import EventEmitter from 'events';

class Post extends EventEmitter {
  constructor(author, text) {
    super();
    this.author = author;
    this.text = text;
    this.likesQty = 0;
    this.on('likePost', (username) => {
      console.log(`${username}Someone liked youre post`);
    });
    this.on('error', (error) => {
      console.error(error);
    });
  }
  like(username) {
    if (!username) {
      return this.emit('error', new Error('No username in the like request!'));
    }
    this.likesQty += 1;
    this.emit('likePost', username);
  }
}

const myPost = new Post('Dmytro', 'My great post!');

// console.log(myPost.author);
// console.log(myPost.text);
// console.log(myPost.likesQty);
myPost.like('Alice ');
setTimeout(() => myPost.like(), 1000);
setTimeout(() => myPost.like('Alex '), 2000);
// console.log(myPost.likesQty);
