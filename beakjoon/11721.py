a = input()
result = ""

for i in a:
    result += i
    if len(result) % 10 == 0:
        print(result)
        result = "" #result를 빈 문자열로 초기화, 이를 통해 다음 10글자를 저장할 준비

if result: #루프가 끝난 후, result에 남아있는 문자가 있는지 확인
    print(result) #마지막 남은 문자열을 출력하기 위함
