const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
const w = input.slice(0, 10);
const k = input.slice(10, 20);
w.sort((a, b) => b - a);
k.sort((a, b) => b - a);
const wresult = w[0] + w[1] + w[2];
const kresult = k[0] + k[1] + k[2];

console.log(wresult, kresult);