import heapq

class Solution(object):
    def kLargest(self,nums,x,k):
    
      
        heap=[]
        for i in range(len(nums)):
           y= abs(nums[i]-x)
           heapq.heappush(heap, (-y,nums[i]))
           if(len(heap)>k):
               heapq.heappop(heap)
        while len(heap)>0:
            #closestPair=(diff,nums[i])
            closestPair=heapq.heappop(heap)
            print(closestPair[1])
       
solution=Solution()
nums=[5,6,7,8,9]
x=7#Closest to this number
k=3# find 3 closest numbers to x
solution.kLargest(nums,x,k)
