const fs = require('fs'); 
const filePath = process.platform === 'linux' ? '/dev/stdin' :'./input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const t = parseInt(input[0]);
for (let i=1; i<=t; i++){
    let str = input[i].split(' ').map(word => word.split('').reverse().join('')).join(' ');
    console.log(str);
}
