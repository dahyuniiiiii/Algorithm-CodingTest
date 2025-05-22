word = input().upper()  # 입력을 대문자로 변환
eng = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'  # 알파벳 목록
counts = []
for c in eng:
    count = word.count(c)  #  word중에 순회한 알파벳들 빈도수 계산
    counts.append(count)  # 계산한 빈도수를 counts 리스트에 추가

max_count = max(counts)  # 최대 빈도수 찾기
most_common = []
for i in range(len(eng)):
    if counts[i] == max_count:
        most_common.append(eng[i])  # 최대 빈도수를 가진 알파벳을 most_common 리스트에 추가 

if len(most_common) > 1:  # 최대 빈도수를 가진 알파벳이 여러 개인 경우
    print('?')
else:
    print(most_common[0])  # 가장 많이 사용된 알파벳 출력
