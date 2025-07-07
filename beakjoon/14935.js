const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let x = parseInt(input);
let a = new Set();

while (!a.has(x)) {
    a.add(x);
    let n = x * x.toString().length;
    if (n === x) {
        console.log("FA");
        return;
    }
    x = n;
}

console.log("NFA");
