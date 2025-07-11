const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0]);
let count = 0;

for (let i = 1; i <= n; i++) {
    let day = parseInt(input[i].replace("D-", ""));
    if (day <= 90) {
        count += 1;
    }
}

console.log(count);
