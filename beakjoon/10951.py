
import sys
input = sys.stdin.read #모든 입력을 한 번에 읽음

case = input().strip().split('\n') #입력을 개행 문자('\n')로 나누어 각 줄을 리스트로 만듬

for i in case:
    a, b = map(int, i.split()) #a와 b로 분리하여 정수로 변환한 후 두 수의 합을 바로 출력
    print(a + b)