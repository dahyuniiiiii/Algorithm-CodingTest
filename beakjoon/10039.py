a = int(input())
b = int(input())
c = int(input())
d = int(input())
e = int(input())
student = [a,b,c,d,e]
sum = 0
for i in student:
    if i < 40 :
        i = 40
    sum += i
avg = sum /5
print(int(avg))