const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();
let n = parseInt(input); 
let firstnum = n;      
let count = 0;

do {
    let a = Math.floor(n / 10);  
    let b = n % 10;              
    let sum = a + b;          
    n = (b * 10) + (sum % 10);
    count++;
} while (n !== firstnum);          

console.log(count);
