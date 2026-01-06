const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, b] = fs.readFileSync(filePath).toString().trim().split(' ');
const result = parseInt(n, b);
console.log(result);
