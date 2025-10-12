const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const calls = input[1].split(" ").map(Number);

let y = 0;
let m = 0;
for (let i=0; i<calls.length; i++) {
  y += Math.floor(calls[i] / 30 + 1) * 10; 
  m += Math.floor(calls[i] / 60 + 1) * 15; 
}

if (y < m) {
  console.log("Y", y);
} else if (y > m) {
  console.log("M", m);
} else {
  console.log("Y M", y);
}
