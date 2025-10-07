const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
for (let i = 0; i < 3; i++) {
  let nums = input[i].split(" ").map(Number);
  let result = nums.reduce((a, b) => a + b, 0); //누산기
  switch (result) {
    case 0:
      console.log("D");
      break;
    case 1:
      console.log("C");
      break;
    case 2:
      console.log("B");
      break;
    case 3:
      console.log("A");
      break;
    case 4:
      console.log("E");
      break;
  }
}
