x,y = input().split() #
sum = int(x[::-1]) + int(y[::-1])  # 정수로 변환하지 않고 문자열 덧셈을 하게 되면 의도한 정수 덧셈이 아닌 문자열 연결
sum = str(sum)[::-1]  ##문자열에만 적용할 수 있는 방법
print(sum)

