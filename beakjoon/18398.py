num = int(input())
for i in range(num):
    case = int(input())
    for i in range(case):
        a,b = map(int,input().split())
        print(a+b, a*b)