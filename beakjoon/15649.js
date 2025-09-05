const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, m] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let isUse = Array(n + 1).fill(false); //사용 여부 저장
let temp = [];

function pick(start) {
  if (start === m) {           
    console.log(temp.join(" "));
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (isUse[i]) continue; // 이미 사용한 숫자라면 건너뜀
    isUse[i] = true;           
    temp.push(i);                
    pick(start + 1);             
    temp.pop();               
    isUse[i] = false; // 사용 표시 되돌림
  }
}

pick(0);  