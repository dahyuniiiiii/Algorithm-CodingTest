const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/);
const A = parseInt(input[0], 10);
const B = parseInt(input[1], 10);

const a = 100 - A;
const b = 100 - B;
const c = 100 - (a + b);
const d = a * b;
const q = Math.floor(d / 100);
const r = d % 100;

console.log(a, b, c, d, q, r);
console.log(c + q, r);
