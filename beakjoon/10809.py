eng = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
word = input()
word1 = []

for i in eng:
    if i in word:
        word1.append(word.index(i))
    else:
        word1.append(-1)

# 각 인덱스를 한 줄씩 출력합니다
for index in word1:
    print(index, end=' ')
print()  # 마지막에 줄바꿈을 추가
