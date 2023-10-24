const { myName, myFavoriteNumber, myHobbies } = require('./multiple-exports');
const {
  myName: myOtherName,
  friendName,
  myGreatHobbies,
} = require('./export-and-import');

const greetingFn = require('./my-modules/single-exports');

//Imports from multuple-exports
console.log(myName);
console.log(myFavoriteNumber);
console.log(myHobbies);

myHobbies.push('climbing');

//Import from single-export
console.log(greetingFn);
greetingFn(myName);

//Importsfromexport-and-import
console.log(myOtherName);
console.log(friendName);
console.log(myGreatHobbies);
