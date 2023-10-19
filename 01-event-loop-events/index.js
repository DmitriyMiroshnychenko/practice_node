const fs = require("fs");
const dns = require("dns");

function timestamp() {
  return performance.now().toFixed(2);
}
console.log("Program start");
// Timeout
setTimeout(() => console.log("Timeout 1", performance.now().toFixed(2)), 0);
setTimeout(() => {
  process.nextTick(() => console.log("Next tick 2", timestamp()));
  console.log("Timeout 2", timestamp());
}, 10);
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
// dns.lookup("google.com", (err, address, family) => {
//   console.log("DNS 1 google.com", address, timestamp());
// });

dns.lookup("localhost", (err, address, family) => {
  console.log("DNS 1 localhost", address, timestamp());
  Promise.resolve().then(() => console.log("Promise 2", timestamp()));
  process.nextTick(() => console.log("Next tick 3", timestamp()));
});

console.log("Program end");
