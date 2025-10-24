const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let people = 0;
let max = 0;    

for (let i = 0; i < 10; i++) {
  const [a, b] = input[i].split(" ").map(Number); 
  people = people - a + b; 
  if (people > max) max = people; 
}

console.log(max);
