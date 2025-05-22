a,b = map(int, input().split())

if a == b:
    print(0) #두 숫자 사이에 존재하는 숫자의 개수가 0이라는 의미
else:
    
    start = min(a, b) + 1
    end = max(a, b)

    print(end - start)

    for i in range(start, end):
        print(i, end=' ')
