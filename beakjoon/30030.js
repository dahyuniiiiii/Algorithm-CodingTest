const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const b = Number(fs.readFileSync(filePath).toString().trim());
const a = (b * 10) / 11;
console.log(a);
