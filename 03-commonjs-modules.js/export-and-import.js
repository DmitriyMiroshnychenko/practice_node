const { myName } = require('./multiple-exports');
const friendName = 'Bob';

module.exports.myName = myName;
module.exports.friendName = friendName;
