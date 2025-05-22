n, k = map(int, input().split())
result = []
for i in range(1, n + 1):
    if n % i == 0: #약수를
        result.append(i)  #result에 추가
if k <= len(result): #k번째 약수 존재하는지 확인
    print(result[k - 1]) #존재시 
else:
    print(0)