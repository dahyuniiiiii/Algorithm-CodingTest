const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
const [a, b, c, d, e, f] = input[1].split(" ").map(Number);
const [t, p] = input[2].split(" ").map(Number);

const total =
  Math.ceil(a / t) +
  Math.ceil(b / t) +
  Math.ceil(c / t) +
  Math.ceil(d / t) +
  Math.ceil(e / t) +
  Math.ceil(f / t);

const ttotal = Math.floor(n / p);
const pentotal = n % p;
console.log(total);
console.log(ttotal, pentotal);
