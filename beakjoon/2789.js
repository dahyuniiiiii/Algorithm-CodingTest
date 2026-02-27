const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

let result = '';
for (let i = 0; i < input.length; i++) {
    if (!'CAMBRIDGE'.includes(input[i])) {
        result += input[i];
    }
}
console.log(result);