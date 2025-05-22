const fs = require('fs'); 
const filePath = process.platform === 'linux' ? '/dev/stdin' :'./input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

//입력 먼저 다 받고
const n = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);
const x = parseInt(input[2]);

arr.sort((a, b) => a - b); //오름차순 공식 외우기

let point1 = 0;
let point2 = n-1;
let count = 0;

while(point1<point2){
    const sum = arr[point1]+arr[point2];
    if(sum===x){
        count += 1;
        point1 += 1;
        point2 -= 1;
    }else if(sum<x){
        point1 += 1;
    }else{
        point2 -= 1;
    }
}
console.log(count);