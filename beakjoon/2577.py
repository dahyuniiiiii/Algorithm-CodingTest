a = int(input())
b = int(input())
c = int(input())

result = str(a * b * c) #자릿수 순회하기 위한 문자열 변환

counts = [0] * 10 #카운트 리스트
# count0 = 0
# count1 = 0
# count2 = 0
# count3 = 0
# count4 = 0
# count5 = 0
# count6 = 0
# count7 = 0
# count8 = 0
# count9 = 0 와 동일함


for i in result: #result는 '17037300'
    counts[int(i)] += 1 #문자를 정수로 변환함, 인덱스값 증가

for count in counts: #counts 리스트의 현재 요소 값을 출력
    print(count)
