num = int(input())
num1 = input()
sum = 0 #초기화 필수
for x in num1 :
    sum += int(x)
if len(num1) == num : #들여쓰기 중요
    print(sum)