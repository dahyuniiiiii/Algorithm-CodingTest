const fs = require('fs'); 
const filePath = process.platform === 'linux' ? '/dev/stdin' :'./input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

input.sort((a,b)=>a-b);

console.log(input[1]);