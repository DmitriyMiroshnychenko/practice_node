import { EventEmitter } from 'events';

const myEmmiter = new EventEmitter();

const timeoutListenerFn = (secondsQty) => {
  console.log(`Temeout event in ${secondsQty} seconds!`);
};

myEmmiter.on('timeout', timeoutListenerFn);

setTimeout(() => myEmmiter.emit('timeout', 1), 1000);
setTimeout(() => myEmmiter.emit('timeout', 2), 2000);

myEmmiter.once('singleEvent', () => {
  console.log('Single events occured');
});
//Listener function will be called only once!
setTimeout(() => myEmmiter.emit('singleEvent'), 500);
setTimeout(() => myEmmiter.emit('singleEvent'), 1500);

//Remove listener from the timeout event!
setTimeout(() => myEmmiter.off('timeout', timeoutListenerFn), 3000);
setTimeout(() => myEmmiter.emit('timeout', 4), 4000);
