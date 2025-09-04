const fs = require("fs"); 
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"; 
const [n, m] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number); 
let result = []; 
let temp = [];

function solve(idx) {       
  if (temp.length === m) {        
    result.push(temp.join(" "));
    return;
  }

  for (let i = idx; i <= n; i++) {
    temp.push(i);                 
    solve(i);                   
    temp.pop();                    
  }
}

solve(1);                      
console.log(result.join("\n"));  
