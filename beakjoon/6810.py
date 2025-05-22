nums = [9, 7, 8, 0, 9, 2, 1, 4, 1, 8]
for i in range(3):
    a = int(input())
    nums.append(a)
result = 0
for index in range(len(nums)):
    if index % 2 == 0: 
        result += nums[index] * 1
    else:  
        result += nums[index] * 3
print('The 1-3-sum is %d' % result)