const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const a = input[0].split(" ").map(Number);
const b = input[1].split(" ").map(Number);

let awin = 0;
let bwin = 0;

for (let i = 0; i < 10; i++) {
  if (a[i] > b[i]) {
    awin += 1;
  } else if (a[i] < b[i]) {
    bwin += 1;
  }
}

if (awin > bwin) {
  console.log("A");
} else if (awin < bwin) {
  console.log("B");
} else {
  console.log("D");
}