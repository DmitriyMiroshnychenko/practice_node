const { myName, myHobbies } = require('./multiple-exports');
const friendName = 'Bob';

module.exports.myName = myName;
module.exports.friendName = friendName;
//property names could be different from the variable names
module.exports.myGreatHobbies = myHobbies;
