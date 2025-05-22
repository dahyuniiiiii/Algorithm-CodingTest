s = int(input())
b = input()

countA = b.count('A')
countB = b.count('B')

if countA > countB:
    print('A')
elif countA < countB:
    print('B')
else:
    print('Tie')
