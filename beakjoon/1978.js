const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = parseInt(input[0]);
let nums = input[1].split(' ').map(Number);

let count = 0;

for (let i = 0; i < n; i++) {
    let num = nums[i];
    if (num < 2) {
        continue;
    }

    let isResult = true;
    for (let j = 2; j < num; j++) {
        if (num % j === 0) {
            isResult = false;
            break;
        }
    }

    if (isResult) {
        count++;
    }
}

console.log(count);
