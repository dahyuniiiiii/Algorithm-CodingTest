a = input()
a = a.lower()
count = 0
for i in a :
    if i in 'aeiou':
        count += 1
print(count)
