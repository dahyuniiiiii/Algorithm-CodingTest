const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, m] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

console.log(Math.min(Math.floor(n / 2), Math.floor(m / 2)));
