const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const x = Number(fs.readFileSync(filePath).toString().trim());
console.log(24*x);