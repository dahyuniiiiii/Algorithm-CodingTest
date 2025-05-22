
h,m=  map(int, input().split())
c=int(input())

t = int(m+c)
if t < 60 :
    print(h,t%60) 
else :
    h = h +t//60
    if h > 23 :
        print(h-24, t%60)
    else :
        print (h, t%60)


