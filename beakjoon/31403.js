const fs = require('fs'); //node.js에 내장되어있는 fs모듈 불러옴 표준입력으로  받아온걸 문자열로 받아와서 줄바꿈으로 구별
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

a = input[0];
b = input[1];
c = input[2];
console.log(parseInt(a)+parseInt(b)-parseInt(c));
console.log(a+b-c);

