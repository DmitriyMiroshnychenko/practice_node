const { myName, myFavoriteNumber, myHobbies } = require('./multiple-exports');
const { myName: myOtherName, friendName } = require('./export-and-import');

const greetingFn = require('./single-exports');
console.log(myName);
console.log(myFavoriteNumber);
console.log(myHobbies);

// console.log(greetingFn);
// greetingFn(myName);

console.log(myOtherName);
console.log(friendName);
