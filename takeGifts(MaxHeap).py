
"""
You are given an integer array gifts denoting the number of gifts in various piles. Every second, you do the following:

Choose the pile with the maximum number of gifts.
If there is more than one pile with the maximum number of gifts, choose any.
Leave behind the floor of the square root of the number of gifts in the pile. Take the rest of the gifts.
Return the number of gifts remaining after k seconds.
"""
import heapq
import math
class Solution(object):
    def pickGifts(self, gifts, k):
        
        #make max heap first
        gifts=[-x for x in gifts]
        heapq.heapify(gifts)
        tsum=0
        while k:
            maxPile=-heapq.heappop(gifts) 
            left=math.floor(math.sqrt(maxPile))
            heapq.heappush(gifts,-left)
            k-=1
            
        for x in gifts:
            tsum+=-x
        return tsum
        
gifts = [1,1,1,1]
k = 4
solution=Solution()
result=solution.pickGifts(gifts,k)
print(result)