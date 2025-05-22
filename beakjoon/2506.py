n = int(input())
score = list(map(int, input().split()))

result = 0
count = 0

for i in score:
    if i == 1:
        count += 1
        result += count
    else:
        count = 0

print(result)
