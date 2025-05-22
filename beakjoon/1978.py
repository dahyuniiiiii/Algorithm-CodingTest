n = int(input())
nums = []
for i in range(n):
    num = list(map(int,input().split()))
    nums.append(num)
    count = 0
    if num == 1 :
        count += 0
    if num % i != 0 :
        count += 1
        print(count)
    else :
        count += 0