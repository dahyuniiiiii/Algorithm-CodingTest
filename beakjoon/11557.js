const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
let t = Number(input[0]);
let index = 1;

for (let i = 0; i < t; i++) {
  let n = Number(input[index++]);
  
  let max = 0;
  let result = "";

  for (let j = 0; j < n; j++) {
    const [x, y] = input[index++].split(" ");
    const yang = Number(y);
    if (yang > max) {
      max = yang;
      result = x;
    }
  }
  console.log(result);
}
