const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input[0]);
let name = [];

let inc = true;
let dec = true;
for (let i = 1; i <= n; i++) {
  name.push(input[i]);
  if (i > 1) {
    const start = name[i - 2];
    const end = name[i - 1];
    if (start.localeCompare(end) >= 0) inc = false;
    if (start.localeCompare(end) <= 0) dec = false;
  }
}
if (inc) console.log("INCREASING");
else if (dec) console.log("DECREASING");
else console.log("NEITHER");
