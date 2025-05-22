case = int(input())  # 테스트 케이스의 수 입력
result = []  # 결과를 저장할 리스트

for i in range(case):  # 각 테스트 케이스에 대해 반복 : 2
    num = int(input())  # 각 테스트 케이스의 숫자의 개수 입력  : 5,7
    numbers = input().split()  # 숫자들을 한 줄로 입력받아 공백으로 분할 : 1 1 1 1 1 , 1 2 3 4 5 6 7
    sum = 0  # 합을 저장할 변수 초기화
    for j in range(num):  # 주어진 숫자의 개수만큼 반복
        num1 = int(numbers[j])  # 각 숫자를 정수로 변환
        sum += num1  # 합 계산
    result.append(sum)  # 결과 리스트에 합 추가

for x in result:  # 각 테스트 케이스의 결과 출력
    print(x)
