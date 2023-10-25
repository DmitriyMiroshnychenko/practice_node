import { EventEmitter } from 'events';

const myEmmiter = new EventEmitter();

myEmmiter.on('timeout', (secondsQty) => {
  console.log(`Temeout event in ${secondsQty} seconds!`);
});

setTimeout(() => myEmmiter.emit('timeout', 1), 1000);
setTimeout(() => myEmmiter.emit('timeout', 2), 2000);
