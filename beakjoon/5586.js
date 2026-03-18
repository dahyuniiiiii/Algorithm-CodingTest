const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let countJOI = 0;
let countIOI = 0;

for (let i = 0; i <= input.length; i++) {
  const str = input.slice(i, i + 3);

  if (str === "JOI") countJOI++;
  if (str === "IOI") countIOI++;
}

console.log(countJOI);
console.log(countIOI);