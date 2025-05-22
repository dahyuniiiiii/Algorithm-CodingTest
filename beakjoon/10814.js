const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = [];

for (let i = 1; i <= n; i++) {
    const [age, name] = input[i].split(' ');
    arr.push([parseInt(age), name]);
}
arr.sort((a, b) => a[0] - b[0]);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i][0], arr[i][1]);
}
