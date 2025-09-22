const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const t = Number(input[0]);

for (let i = 1; i <= t; i++) {
  let tc = Number(input[i]);
  tc = tc % 25;
  if (0 <= tc && tc < 17) {
    console.log("ONLINE");
  } else {
    console.log("OFFLINE");
  }
}
