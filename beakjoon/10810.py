n,m=map(int,input().split()) #5 4 # 바구니갯수,세로길이
basket = []
for i in range(n):
    basket.append(i)
    for j in range(m):
        a,b,c = list(map(int, input().split()))
print(basket)
# 1 2 3 #i번 바구니부터 j번 바구니까지 k번공을 넣는다
# 3 4 4
# 1 4 1
# 2 2 2
# #출력
# 1 2 1 1 0 #n번 바구니가 숫자 총 갯수, 공이 들어있지 않으면 0
n, m = map(int, input().split())  # N과 M 입력 받기
basket = [0] * (n + 1)  # N개의 바구니 초기화 (0으로)

for _ in range(m):
    a, b, c = map(int, input().split())  # 공 넣는 방법 입력 받기
    for j in range(a, b + 1):  # 지정된 범위의 바구니에 공 번호 넣기
        basket[j] = c

# 결과 출력 (1번 바구니부터 N번 바구니까지)
for i in range(1, n + 1):
    print(basket[i], end=' ')

n, m = map(int, input().split()): 첫 번째 줄에서 N과 M을 입력 받습니다.
basket = [0] * (n + 1): N개의 바구니를 0으로 초기화합니다. 
바구니는 1번부터 시작하므로 인덱스 0은 사용하지 않습니다.
for _ in range(m):를 통해 M번의 공 넣는 방법을 입력 받습니다.
a, b, c = map(int, input().split())를 통해 각 방법을 입력 받고, 
for j in range(a, b + 1)를 통해 지정된 범위의 바구니에 공 번호를 넣습니다.
마지막으로 for i in range(1, n + 1):를 통해 1번 바구니부터 
N번 바구니까지의 결과를 출력합니다. end=' '를 사용하여 공백으로 구분하여 
출력합니다.



n,m=map(int,input().split()) #5 4 # 바구니갯수,세로길이
basket = []
for i in range(m):
    a,b,c = map(int, input().split())
    for i in range(a,b+1):
        del basket[i]
        basket.append(i,c)
        print()
    print()
if k in basket:
    k == 0
else :
    print()
# 1 2 3 #i번 바구니부터 j번 바구니까지 k번공을 넣는다
# 3 4 4
# 1 4 1
# 2 2 2
# #출력
# 1 2 1 1 0 #n번 바구니가 숫자 총 갯수, 공이 들어있지 않으면 0