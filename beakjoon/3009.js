const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const a = input[0].split(' ').map(Number);
const b = input[1].split(' ').map(Number);
const c = input[2].split(' ').map(Number);

const x = [a[0], b[0], c[0]];
const y = [a[1], b[1], c[1]];

const d1 = x[0] === x[1] ? x[2] : (x[0] === x[2] ? x[1] : x[0]);
const d2 = y[0] === y[1] ? y[2] : (y[0] === y[2] ? y[1] : y[0]);

console.log(d1, d2);
