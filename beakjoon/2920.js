const fs = require('fs'); 
const input = fs.readFileSync('c:/오다현/오다현 공부/visual code/Baekjoon/단계별로풀어보기/input.txt').toString().trim(); //trim()함수는 사이에 공백이 아닌 문자열 양 끝 공백을 제거해줌
if(input==="1 2 3 4 5 6 7 8"){
    console.log("ascending");
}else if(input==="8 7 6 5 4 3 2 1"){
    console.log("descending");
}else{
    console.log("mixed");
}