const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = input[0];
const p = input[1];

let price = p;

if (n >= 5) price = Math.min(price, p - 500);
if (n >= 10) price = Math.min(price, Math.floor(p * 0.9));
if (n >= 15) price = Math.min(price, p - 2000);
if (n >= 20) price = Math.min(price, Math.floor(p * 0.75));

console.log(Math.max(0, price));
