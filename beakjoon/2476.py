n = int(input()) #사람수
win =0
for i in range(n): #사람수만큼 반복
    a,b,c = map(int,input().split())
    if a == b == c :
        result = 10000+a*1000
    elif a== b or a==c :
        result = 1000+a*100
    elif b == c:
        result = 1000+b*100
    else :
        result = max(a,b,c)*100
    if result > win:
        win = result
print(win)
