const fs = require('fs'); //표준입력으로  받아온걸 문자열로 받아와서 줄바꿈으로 구별
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); //입력값을 배열로 저장

let nums = []; //나머지저장
for (let i = 0; i < 10; i++) {
    let num = parseInt(input[i]); //input배열 값들을 숫자로 변경해서 가져옴
    nums.push(num % 42);
}

let result = new Set(nums);
console.log(result.size);
