n = int(input())
count = 0
a,b,c = map(int,input().split())
if a <= n:
    count += a
else:
    count += n

if b <= n:
    count += b
else:
    count += n

if c <= n:
    count += c
else:
    count += n
print(count)