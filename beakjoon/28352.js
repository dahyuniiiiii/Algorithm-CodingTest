const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);

let result = 1;
for (let i = 1; i <= n; i++) {
    result *= i;
}

console.log(Math.floor(result / 604800)); 
