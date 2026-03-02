const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = Number(fs.readFileSync(filePath).toString().trim());
console.log(input-2024);
//실행시 컨트롤 옵션 엔