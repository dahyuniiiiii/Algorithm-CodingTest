n = int(input())
for i in range(n):
    p = int(input())
    result = ''
    big = 0  #가장 큰 숫자를 찾기 위한 초기값을 설정

    for j in range(p):
        c, name = input().split()
        c = int(c)  # c를 숫자로 변환

        if c > big: #c가 지금까지 발견된 값들 중에서 가장 큰 값(max_value)보다 크면, 그 값을 max_value에 저장
            big = c #max_value라는 변수에 하나의 값만 저장
            result = name  # 최대값일 때 이름을 저장

    print(result)
    