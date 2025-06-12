const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0]);
let arr = [];
let o = [];

for (let i = 1; i <= n; i++) {
    const c = input[i].split(' ');

    if (c[0] === 'push') {
        arr.push(parseInt(c[1]));
    } else if (c[0] === 'pop') {
        o.push(arr.length === 0 ? -1 : arr.pop());
    } else if (c[0] === 'size') {
        o.push(arr.length);
    } else if (c[0] === 'empty') {
        o.push(arr.length === 0 ? 1 : 0);
    } else if (c[0] === 'top') {
        o.push(arr.length === 0 ? -1 : arr[arr.length - 1]);
    }
}

console.log(o.join('\n'));
