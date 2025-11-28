const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const n = Number(fs.readFileSync(filePath).toString().trim());
let num = 1;  
let round = 1; 

while (round < n) {
  round += 6 * num; 
  num++;           
}

console.log(num);
