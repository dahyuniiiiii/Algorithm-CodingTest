const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const x = Number(fs.readFileSync(filePath).toString().trim());

let sum = 0;
let stick = 64;
let count = 0;
while (sum !== x) {
    if (sum + stick > x) {
        stick /= 2;
    } else {
        sum += stick;
        count += 1;
    }
}

console.log(count);
