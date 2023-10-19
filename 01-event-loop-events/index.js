const fs = require("fs");

function timestamp() {
  return performance.now().toFixed(2);
}
console.log("Program start");

setTimeout(() => console.log("Timeout 1", performance.now().toFixed(2)), 0);
setTimeout(() => {
  process.nextTick(() => console.log("Next tick 2", timestamp()));
  console.log("Timeout 2", timestamp());
}, 10);

fs.writeFile("./test.txt", "Hello Node.js", () =>
  console.log("File written", timestamp())
);
Promise.resolve().then(() => console.log("Promise 1", timestamp()));

process.nextTick(() => console.log("Next tick 1", timestamp()));

setImmediate(() => console.log("Immediate 1", timestamp()));

console.log("Program end");
