const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  if (a === 0 && b === 0 && c === 0) break;

  const s = [a, b, c].sort((x, y) => x - y); 
  if (s[2] >= s[0] + s[1]) {
    console.log("Invalid");
  } else if (a === b && b === c) {
    console.log("Equilateral");
  } else if (a === b || b === c || a === c) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
}
