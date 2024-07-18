import heapq
class Solution(object):
    def lastStoneWeight(self,stones):
        stones=[-x for x in stones]
        heapq.heapify(stones)
        if len(stones)==1:
            return -heapq.heappop(stones)
        while len(stones)>1:
            first=abs(heapq.heappop(stones))
            second=abs(heapq.heappop(stones))
            
            if first>second:
                val=first-second
                heapq.heappush(stones,-val)
        
        if len(stones)==0:
            return 0
        else:
            return -stones[0]
        
        
solution=Solution()
stones = [8]
result=solution.lastStoneWeight(stones)
print(result)