const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

let arr = '';
for (let i = 1; i <= n; i++) {
    const firstNums = input[i].split(' ').map(Number);
    const secondNums = input[i + n].split(' ').map(Number);
    let line = ''; 
    for (let j = 0; j < m; j++) {
        line += (firstNums[j] + secondNums[j]) + ' ';
    }
    arr += line.trim() + '\n'; 
}

console.log(arr.trim());
