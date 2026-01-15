const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const n = input[0];
const scores = input.slice(1, 1 + n);

let min = scores[0];
let max = scores[0];

for (let i = 1; i < n; i++) {
  if (scores[i] < min) min = scores[i];
  if (scores[i] > max) max = scores[i];
}

console.log(max - min);
