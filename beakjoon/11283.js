const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const say = "가".charresultAt(0);
const result = input.charresultAt(0);
const index = result - say;

console.log(index + 1);
