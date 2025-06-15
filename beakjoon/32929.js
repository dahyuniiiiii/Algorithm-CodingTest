const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const x = parseInt(input[0]);
const result = 'UOS';
console.log(result[x%3-1]);