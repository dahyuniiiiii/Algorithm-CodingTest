n = int(input())
i = 2

while n != 1: #n이 1이 될 때까지 반복
    if n % i == 0:
        print(i)
        n //= i #n을 i로 나눈 몫으로 업데이트
    else:
        i += 1 #다음소수 업데이트