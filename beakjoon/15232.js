const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
const row = input[0];
const col = input[1];
for (let i = 0; i < row; i++) {
    console.log('*'.repeat(col));
}
