import sys
n = int(sys.stdin.readline())
result = 0
for i in range(n):
    tap = int(sys.stdin.readline())
    result += tap
print(result - (n-1))
