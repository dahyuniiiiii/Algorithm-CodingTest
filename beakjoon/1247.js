const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let num = 0;

while (num < input.length) {
  const n = parseInt(input[num++]);
  let result = 0n;
  for (let i = 0; i < n; i++) {
    result += BigInt(input[num++]);
  }
  if (result > 0n) {
    console.log('+');
  } else if (result === 0n) {
    console.log('0');
  } else {
    console.log('-');
  }
}
