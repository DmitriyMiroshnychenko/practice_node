const myName = 'Dmitro';
const myFavoriteNumber = 777;
const myHobbies = ['swiming', 'fishing', 'travler'];

console.log('Text from the multiple exports CommonJS module');

//module.exports and export reference the same object in memory
exports.myName = myName;
exports.myFavoriteNumber = myFavoriteNumber;
exports.myHobbies = myHobbies;
