while 1 :
    a,b =map(int, input().split())
    if a == 0 and b == 0 :
        break
    print(a+b)

    # a b 입력값을 받고 
    # 예제 입력 보면 나란히 입력되니깐 맞춰서 코드짜고
    # a 하고 b가 0이라면 and 나 or 연산자해서 break하고
    # 결과도출