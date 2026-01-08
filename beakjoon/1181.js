const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = Number(input[0]); 
let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(input[i]); 
}
arr = Array.from(new Set(arr));
arr.sort((a, b) => { 
    if (a.length == b.length) {
        return a.localeCompare(b);
    } else {
        return a.length - b.length;
    }
});

console.log(arr.join('\n'));
