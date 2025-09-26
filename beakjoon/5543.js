const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const minHam = Math.min(input[0], input[1], input[2]); 
const minDrink = Math.min(input[3], input[4]); 

console.log(minHam + minDrink - 50);
