const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [h, i, a, r, c] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);
console.log(h * i - a * r * c);
