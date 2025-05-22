const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); // 줄바꿈 기준으로 입력받음

const [n, m] = input[0].split(' ').map(Number); 

let arr = []; 


for (let i = 1; i <= n; i++) { 
    arr.push(i);

} 

for (let i = 1; i <= m; i++) {
    let [start, end] = input[i].split(' ').map(Number); 

    let newNums = arr.slice(start - 1, end).reverse(); 

    for (let j = 0; j < newNums.length; j++) {
        arr[start - 1 + j] = newNums[j];

    }
}

console.log(arr.join(' '));
