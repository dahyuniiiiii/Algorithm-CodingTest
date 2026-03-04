const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const n = Number(fs.readFileSync(filePath).toString().trim());

const a = Math.floor(n / 2);
const b = n - a;
console.log((a + 1) * (b + 1));