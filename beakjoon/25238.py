a,b = map(int,input().split())
b = b/100
if a - (a*b) >= 100 :
    print('0')
else :
    print('1')