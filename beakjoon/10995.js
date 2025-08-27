const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const num = parseInt(input[0]);

for (let i = 0; i < num; i++) {
  if (i % 2 === 0) {
    console.log("* ".repeat(num).trim());
  } else {
    console.log(" " + "* ".repeat(num).trim());
  }
}
