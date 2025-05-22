n = int(input())
small = float('inf') #무한대
result = ''
for i in range(n):
    a,b=input().split()
    b = int(b)
    if b < small :
        small = b
        result = a #b값이 가장 작을 때의 a값 저장
print(result)