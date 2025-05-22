const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//2
//6 12 10
//30 50 72 입력 하면
//['2','6 12 10','30 50 72']로 배열로 저장됨

//항목에 맞게 갖다쓰기위해 만든 배열들
let three_nums = [];
let before_result =[];
const t = parseInt(input[0]); //2번 돌기위해 숫자로 바꿈
for(let i=1; i<=t; i++){
    let three_nums = input[i].split(' '); //미리 빈배열 만들어논 three_nums에 ['6','12','10']로 저장됨
    for(let j=0; j<length.three_nums; j++){ //length.input은 배열 안 요소 개수 3
        let before_result = parseInt(three_nums[j]); //배열을 6,12,10으로 구별해놓음 
        let h_height = n%h; //나머지가 층수
        let h_width = (before_result[2]/before_result[0]).toString();
        if (h_height === 0){ //조건문으로 나머지 0일때만 케이스 분리해줌
            h_height == before_result[0];
        }else{
            h_height = h_height;
        }
        let result = h_height + h_width; //문자열과 더해짐
    }
    console.log(result); //도는만큼 출력
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
//인덱스로접근하지 왜 반복하냐
//height weight n 바로수식들을나열하는데

//층+호수를 구해야한다
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
