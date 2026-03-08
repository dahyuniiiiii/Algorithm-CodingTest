const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [h,m]= fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
console.log((h-9)*60+m);