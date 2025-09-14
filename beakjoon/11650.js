const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
const arr = new Array(n);

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].trim().split(" ").map(Number);
  arr[i - 1] = [x, y];
}

arr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
console.log(arr.map(([x, y]) => `${x} ${y}`).join("\n"));
