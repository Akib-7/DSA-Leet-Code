# Online Python compiler (interpreter) to run Python online.
# Write Python 3 code in this online editor and run it.
import heapq

"""
Code for MIN HEAP (original lib of python)

data=[4,5,19,20,6,15,14,9,8]
heapq.heapify(data)

print("heap:",data)
s=heapq.nlargest(3,data)
print("n-largest:",s)
print(s.pop())
n=heapq.heappushpop(data,21)
print(data)
print(n)
"""
""" 
heapq.heapify(data)
heapq.heappush(data,5)
heapq.heappop(data)
heapq.heappushpop(data,5)
heapq.nlargest(3,data)
heapq.nsmallest(3,data)
"""


"""
CODE FOR MAX HEAP(By reversing the list and using methods inversely)
data=[4,5,19,20,6,18,14,9,8]
data=[-x for x in data]
val=40
heapq.heapify(data)
print("max Heap",data)
heapq.heappush(data,-val)
print("max Heap",data)
s=-heapq.heappop(data)
# In case of max heap if we want n-largest element we will use 
# n-smallest function of heapq because every function will be reversed
# so n here will give 3 largest element of heap and we print it usinng -n.pop()
n=heapq.nsmallest(3,data)

print("Largest Element",s)
print("n-largest",n)
print(-n.pop())
"""


