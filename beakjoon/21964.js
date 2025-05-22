const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const s = input[1];         
console.log(s.slice(-5));  
