list = [] #입력값들을 저장

for i in range(9):
    a = int(input())
    list.append(a)
max_result = max(list) #리스트에서 가장 큰 값을 찾기
max_num = list.index(max_result) + 1  # 인덱스는 0부터 시작하므로 1을 더해줍니다.
print(max_result)
print(max_num)







