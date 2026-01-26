const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const n = Number(fs.readFileSync(filePath).toString().trim());
let arr = [];
let result = [];
for (let i = 1; i <= n; i++) {
    arr.push(i);
}
while (arr.length > 1) {
    result.push(arr.shift());
    arr.push(arr.shift());
}
result.push(arr[0]);          
console.log(result.join(' '));