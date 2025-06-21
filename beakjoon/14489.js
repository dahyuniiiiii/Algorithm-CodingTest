const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const money = parseInt(input[1]);

if (a + b >= money * 2) {
    console.log(a + b - money * 2);
} else {
    console.log(a + b);
}
