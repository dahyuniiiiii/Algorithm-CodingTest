const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
const sentences = [
  "Never gonna give you up",
  "Never gonna let you down",
  "Never gonna run around and desert you",
  "Never gonna make you cry",
  "Never gonna say goodbye",
  "Never gonna tell a lie and hurt you",
  "Never gonna stop",
];

let isCorrect = false; 
for (let i = 1; i <= n; i++) {
  const line = input[i];
  if (!sentences.includes(line)) {
    isCorrect = true;
    break; 
  }
}

console.log(isCorrect ? "Yes" : "No");
