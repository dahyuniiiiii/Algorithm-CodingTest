const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const num = parseInt(input[0]);

for (let i = 0; i < 2 * num; i++) {
  for (let j = 0; j < num; j++) {
    if (i % 2 == 0) {
      process.stdout.write(j % 2 === 0 ? "*" : " "); //문자열을 이어서 같은 줄에 출력할 때
    } else {
      process.stdout.write(j % 2 === 0 ? " " : "*");
    }
  }
  console.log();
}
