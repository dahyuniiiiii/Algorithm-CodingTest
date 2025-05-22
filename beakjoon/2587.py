list = []
sum = 0
for i in range(5):
    num = int(input())
    sum += num #i가 아닌 num 더하기
    list.append(num)
avg = sum / 5

list.sort()
print(int(avg))
print(list[2])



