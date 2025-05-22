import sys
n = int(sys.stdin.readline())
arr=[] #list라는 리스트명은 사용 금지
for i in range(n):
    nums = int(sys.stdin.readline())
    arr.append(nums) #arr리스트에 nums값을 추가
arr.sort() #오름차순
for i in arr:
    print(i) 
