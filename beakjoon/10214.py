t = int(input())
for j in range(t):
    y = 0
    k = 0 
    for i in range(9):
        a,b = map(int,input().split())
        y=y + a
        k= k+b
    if y < k :
        print('Korea')
    elif y > k :
        print('Yonsei')
    else :
        print('Draw')
