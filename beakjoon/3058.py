t = int(input())

for _ in range(t): #반복 인덱스 사용하지 않을때 _ 사용
    case = list(map(int, input().split()))
    a = 0
    min_a = 100  # 자연수가 100보다 작다고 했으므로, 가장 큰 값으로 초기화

    for i in case:
        if i % 2 == 0:  # 짝수인 경우
            a += i
            if i < min_a:
                min_a = i

    print(a, min_a)
