n = int(input())
for i in range(n):
    score = input()
    wait = 0 #현재 연속된 O의 점수
    result = 0 #총 점수
    for x in score:
        if x == 'O':
            wait += 1 #현재 연속된 O의 개수를 증가
            result += wait #증가된 wait를 총 점수에 더함
        else:
            wait = 0 #X를 만났을 때, 현재 연속된 O의 점수를 0으로 초기화
    print(result)
