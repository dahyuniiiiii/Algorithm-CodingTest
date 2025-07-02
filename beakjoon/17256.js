const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const a = input[0].split(' ').map(Number);
const c = input[1].split(' ').map(Number);
console.log(c[0]-a[2],c[1]/a[1],c[2]-a[0]);


