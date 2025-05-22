const fs = require('fs'); 
const input = fs.readFileSync('input.txt').toString().trim().split(" ");
let n = parseInt(input[0]);
let result = 0;
for(let i=1; i<=n; i++){
    result += i; //선언은 위에 했으니 값만 다시 선언
}
console.log(result);
result = 0;
for(let i=1; i<=n; i++){
    result += i;
}
console.log(result*result);
result = 0;
for(let i=1; i<=n; i++){
    result += i*i*i;
}
console.log(result);