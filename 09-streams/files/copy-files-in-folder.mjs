import fs from 'fs';

const sourceDir = './files';
const destinationDir = './copied-files';

if (!fs.existsSync(sourceDir)) {
  console.warn(`Sourse dir ${sourceDir} doesnt exist!`);
  console.log('Exiting...');
  process.exit(0);
}

if (fs.existsSync(destinationDir)) {
  fs.rmdirSync(destinationDir);
  console.log('Destination dir removed');
}
fs.mkdirSync(destinationDir);
