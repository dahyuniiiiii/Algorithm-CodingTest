const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);
console.log(Math.min(Math.floor(a / 2), b));
