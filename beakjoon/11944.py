n,m=input().split()
n = int(n)
m = int(m)
result = str(n)*n
if len(result) > m :
    result = result[:m]
print(result)
