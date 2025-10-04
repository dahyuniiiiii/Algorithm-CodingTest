const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let num = 0;
while (true) {
  const n = parseInt(input[num]); 
  if (n === -1) break; 
  num++;

  let result = 0;
  let beforeA = 0;

  for (let i = 0; i < n; i++) {
    const [a, b] = input[num].split(" ").map(Number); 
    result += a * (b - beforeA);
    beforeA = b; 
    num++;
  }
   console.log(result + " miles");
}