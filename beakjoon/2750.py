n = int(input())
list = [] #빈 리스트 numbers를 생성
for i in range(n):
    num = int(input())
    list.append(num)
list.sort() #리스트 numbers를 오름차순으로 정렬
for num in list:
    print(num) #정렬된 리스트 numbers의 각 요소를 for 루프를 사용하여 하나씩 출력합니다.
