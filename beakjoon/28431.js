const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let arr = [];

for (let i = 0; i < 5; i++) {
    const num = parseInt(input[i]);
    arr.push(num);
}

arr.sort((a, b) => a - b);

for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }
    if (count % 2 === 1) {
        console.log(arr[i]);
        break;
    }
}
