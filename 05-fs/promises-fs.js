const fs = require('fs/promises');

fs.writeFile('./file.txt', 'First file txt')
  .then(() => console.log('File first.txt was written'))
  .then(() => fs.appendFile('./first.txt', '\nOne more line'))
  .then(() => console.log('Append text to the first.txt file'))
  .then(() => fs.rename('./first.txt', 'renamed-first.txt'))
  .then(() => console.log('File was renamed'))
  .catch((err) => console.log(err));

// const fs = require('fs');

// fs.writeFile('./first.txt', 'First file txt', (err) => {
//   if (err) console.log(err);
//   else console.log('File first.txt was writte');
//   fs.appendFile('./first.txt', '\nOne more line', (err) => {
//     if (err) console.log(err);
//     else {
//       console.log('Append text to the first.txt file');
//       fs.rename('./first.txt', 'renamed-first.txt', (err) => {
//         if (err) console.log(err);
//         else console.log('File was renamed');
//       });
//     }
//   });
// });
