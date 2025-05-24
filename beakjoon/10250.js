const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const t = parseInt(input[0]);

for (let i = 1; i <= t; i++) {
    const [H, W, N] = input[i].split(' ').map(Number);

    // 층수: N % H (단, 나머지가 0이면 꼭대기 층 H)
    let floor = N % H;
    if (floor === 0) floor = H;

    // 호수: Math.ceil(N / H)
    const room = Math.ceil(N / H);

    // 방 번호: 층수 * 100 + 호수
    console.log(floor * 100 + room);
}

//힌트정리
//손님수는 w*h
//101 102 103은 1,7,13번쩨손님 같은 층에서는 6씩 증가
//나눴는데 안떨어지는 몇개가있음
//나머지연산이 주기적으로 돌고있음

//101부터 한층씩 높아짐 h층만큼 2로바꿈 
//2중반복을 돌리면 됨

//이차원배열은맞는데
//three_nums를순회할이유가없다
//반복x 인덱스로 접근
//height weight n 바로수식들을나열하는데


