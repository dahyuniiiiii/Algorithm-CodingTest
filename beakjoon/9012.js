const fs = require('fs');
const { normalize } = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const t = Number(input[0]);
() = Vps
x = vps
xy = vps
if 입력 = vps 
yes
여는문자는 push 닫문문자 나오면 여는문자 하나 pop

let out = [];

for (let i = 1; i <= t; i++) {
  const s = (input[i] ?? '').trim();
  let balance = 0;
  let ok = true;

  for (const ch of s) {
    if (ch === '(') balance++;
    else if (ch === ')') balance--;
    
    // 닫는 괄호가 먼저 많아지면 스택에서 pop할 게 없음 => VPS 아님
    if (balance < 0) {
      ok = false;
      break;
    }
  }

  // 끝까지 봤을 때 여는 괄호가 남아있으면 VPS 아님
  if (balance !== 0) ok = false;

  out.push(ok ? 'YES' : 'NO');
}

console.log(out.join('\n'));
