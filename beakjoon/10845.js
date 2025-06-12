const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
    const c= input[i].split(' ');

    if (cmd[0] === 'push') {
        arr.push(parseInt(cmd[1])); 
    } else if (cmd[0] === 'pop') {
        console.log(arr.length === 0 ? -1 : stack.pop());
    } else if (cmd[0] === 'size') {
        console.log(arr.length);
    } else if (cmd[0] === 'empty') {
        console.log(stack.length === 0 ? 1 : 0);
    } else if (cmd[0] === 'top') {
        console.log(stack.length === 0 ? -1 : stack[sarr.length - 1]);
    }
}
