const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' :'./input.txt';
const input = fs.readFileSync(filePath);

const today = () => {
  const date = new Date();

  const year = date.getFullYear(); //현재 연도도
  const month = String(date.getMonth() + 1).padStart(2, '0'); //date.getMonth()는 0부터 시작, 두자리로맞추기
  const day = String(date.getDate()).padStart(2, '0');

  console.log(`${year}\n${month}\n${day}`);
};

today();
