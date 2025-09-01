const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const num = parseInt(input[0]);

for (let i = 1; i <= num; i++) {
    if (i === 1) {
        console.log(" ".repeat(num - 1) + "*");
    } else {
        console.log(" ".repeat(num - i) + "*" + " ".repeat(2 * i - 3) + "*");
    }
}