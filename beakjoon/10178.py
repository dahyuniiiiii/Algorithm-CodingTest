case = int(input())
for i in range(case):
    a,b = map(int,input().split())
    result1 = a // b
    result = a % b
    print('You get %d piece(s) and your dad gets %d piece(s).'%(result1, result))