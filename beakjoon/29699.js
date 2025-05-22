const fs = require('fs'); 
const filePath = process.platform === 'linux' ? '/dev/stdin' :'./input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = parseInt(input[0]);
const str = "WelcomeToSMUPC";
console.log(str[n-1]);