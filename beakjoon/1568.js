const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let n = Number(fs.readFileSync(filePath).toString().trim());

let result = 0;
let k = 1;

while(n > 0){
    if(k > n){
        k = 1;
    }

    n -= k;
    k++;
    result++;
}

console.log(result);