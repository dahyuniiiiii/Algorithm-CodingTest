const fs = require('fs'); 
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = parseInt(input[0]); 
let w = 0;
for (let i=1; i<=n; i++){
    let [a,b,x] = input[i].split(' ').map(Number);
    w = a*(x-1)+b;
    console.log(w);
}
