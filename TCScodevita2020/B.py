from collections import Counter
def decToBinary(n): 
  a=[]
  for i in range(3, -1, -1):
    k = n >> i;
    if (k & 1):
      a.append(1)
    else: 
      a.append(0)
  return a
def convert(list):
  s = [str(i) for i in list]
  res = int("".join(s)) 
      
  return(res)
# Driver Code 
s=int(input())
p = map(int,input().strip().split(' '))
num0=[]
num1=[]
for i in p:
  num0.append(decToBinary(i).count(0))
  num1.append(decToBinary(i).count(1))
print(num0)
print(num1)
num10 = []
for i in range(len(num0)):
  num10.append(num0[i]+num1[i])
print(num10)
c=Counter(num10)
numerr = []
if(convert(c.values())>1):
  numerr = decToBinary(convert(c.values()))
else:
  numerr=decToBinary(0)
numstr=""
for j in numerr:
  numstr += str(j)
print(numstr)
  