import { season, temperature } from './named-exports.mjs';
import { isRaning, humidity } from './inline-exports.mjs';
import getDataFromServer from './default-exports.mjs';

console.log(season);
console.log(temperature);

console.log(isRaning);
console.log(humidity);

getDataFromServer('https://jsonplaceholder.typicode.com/posts/')
  .then((post) => console.log(post))
  .catch((err) => console.error(err));
