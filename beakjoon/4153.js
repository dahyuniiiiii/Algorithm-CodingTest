const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);

  if (a === 0 && b === 0 && c === 0) break;

  const s = [a, b, c].sort((x, y) => x - y);
  if (s[0] ** 2 + s[1] ** 2 === s[2] ** 2) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}
