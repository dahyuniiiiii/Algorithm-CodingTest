const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
let arr = []; 
let out = []; 

for (let i = 1; i <= n; i++) {
    let nums = input[i].split(' ').map(Number);

    if (nums[0] === 1) {
        arr.push(nums[1]);
    } else if (nums[0] === 2) {
        out.push(arr.length ? arr.pop() : -1);
    } else if (nums[0] === 3) {
        out.push(arr.length);
    } else if (nums[0] === 4) {
        out.push(arr.length === 0 ? 1 : 0);
    } else if (nums[0] === 5) {
        out.push(arr.length ? arr[arr.length - 1] : -1);
    }
}

console.log(out.join('\n'));
