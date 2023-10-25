const fs = require('fs');

//Avoid using sync version! They block event loop!
try {
  fs.writeFileSync('./file.txt', 'First file txt');
  console.log('File first.txt was written');
  fs.appendFileSync('./first.txt', '\nOne more line');
  console.log('Append text to the first.txt file');
  fs.renameSync('./first.txt', 'renamed-first.txt');
  console.log('File was renamed');
} catch (error) {
  console.log(error);
}

// fs.writeFile('./file.txt', 'First file txt')
//   .then(() => console.log('File first.txt was written'))
//   .then(() => fs.appendFile('./first.txt', '\nOne more line'))
//   .then(() => console.log('Append text to the first.txt file'))
//   .then(() => fs.rename('./first.txt', 'renamed-first.txt'))
//   .then(() => console.log('File was renamed'))
//   .catch((err) => console.log(err));
