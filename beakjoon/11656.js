const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const s = input[0];
let arr = [];
for (let i = 0; i < s.length; i++) {
    arr.push(s.slice(i, s.length));
}
arr.sort();
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
