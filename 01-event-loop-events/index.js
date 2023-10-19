const fs = require("fs");
const dns = require("dns");
const { clearInterval } = require("timers");

function timestamp() {
  return performance.now().toFixed(2);
}
console.log("Program start");

// Timeout
setTimeout(() => console.log("Timeout 1", performance.now().toFixed(2)), 0);
setTimeout(() => {
  process.nextTick(() => console.log("Next tick 2", timestamp()));
  console.log("Timeout 2", timestamp());
}, 100);

// Intervals
let intervalCount = 0;
const intervalId = setInterval(() => {
  console.log(`Interval ${(intervalCount += 1)}`, timestamp());
  if (intervalCount === 2) clearInterval(intervalId);
}, 50);

// Close events
fs.writeFile("./test.txt", "Hello Node.js", () =>
  console.log("File written", timestamp())
);

// Promises
Promise.resolve().then(() => console.log("Promise 1", timestamp()));

// Next tick
process.nextTick(() => console.log("Next tick 1", timestamp()));

// setImmediate
setImmediate(() => console.log("Immediate 1", timestamp()));

// I/O events
dns.lookup("localhost", (err, address, family) => {
  console.log("DNS 1 localhost", address, timestamp());
  Promise.resolve().then(() => console.log("Promise 2", timestamp()));
  process.nextTick(() => console.log("Next tick 3", timestamp()));
});

console.log("Program end");
