numbers = []  # 숫자들을 저장할 리스트
sum = 0  # 홀수들의 합을 저장할 변수

for i in range(7):
    num = int(input())
    if num % 2 == 1:  # num이 홀수인 경우
        numbers.append(num)
        sum += num
if len(numbers) == 0:  # 홀수가 없는 경우
    print('-1')
else:  # 홀수가 있는 경우
    print(sum)
    print(min(numbers))
