a,b,c = map(int,input().split())
cookTime = int(input())
t = a * 3600 + b * 60 + c + cookTime

pa = (t // 3600) % 24
pb = (t // 60) % 60
pc = t % 60

print(pa, pb, pc)
