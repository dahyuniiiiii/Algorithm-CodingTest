const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const n = parseFloat(input[0]);
const score = input[1].split(" ");
let maxScore = 0; 
let result = 0; 
for(let i=0; i<n;i++){
    score[i] = parseInt(score[i]);
    maxScore = Math.max(maxScore, score[i]); 
} 
for(let i=0; i<n;i++){
        score[i] = score[i]/maxScore*100;
    result += score[i];
}
console.log(result/n);