t = int(input())
for i in range(t):
    case = input().split()
    a = int(case[0])
    b = case[1]
    for j in b:
        print(j * a, end="")
    print()  # 이 부분을 추가하여 각 테스트 케이스의 출력을 완료한 후 줄바꿈을 합니다.
