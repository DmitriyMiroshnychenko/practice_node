import { season, temperature } from './named-exports.mjs';
import { isRaning, humidity } from './inline-exports.mjs';
import getDataFromServer from './default-exports.mjs';
import DEFAULT_SERVER, {
  USERNAME as MY_USERNAME,
  PASSWORD as MY_PASSWORD,
} from './mixed-exports.mjs';

console.log(season);
console.log(temperature);

console.log(isRaning);
console.log(humidity);

getDataFromServer('https://jsonplaceholder.typicode.com/posts/1')
  .then((post) => console.log(post))
  .catch((err) => console.error(err));

console.log(DEFAULT_SERVER);
console.log(MY_USERNAME, MY_PASSWORD);
