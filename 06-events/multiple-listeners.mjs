import { EventEmitter } from 'events';

const myEmmiter = new EventEmitter();

myEmmiter.on('myEvent', () => {
  console.log('First event listener');
});

myEmmiter.on('myEvent', () => {
  console.log('Second event listener');
});

myEmmiter.on('otherEvent', () => {
  console.log('oyherEvent');
});

//Default listeners Qty is 10
myEmmiter.setMaxListeners(25);
console.log(myEmmiter.getMaxListeners());

console.log(myEmmiter.eventNames());

setTimeout(() => myEmmiter.emit('myEvent'), 1000);
