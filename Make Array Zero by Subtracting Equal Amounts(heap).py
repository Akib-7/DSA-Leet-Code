"""
You are given a non-negative integer array nums. In one operation, you must:

Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
Subtract x from every positive element in nums.
Return the minimum number of operations to make every element in nums equal to 0.

 

Example 1:

Input: nums = [1,5,0,3,5]
Output: 3
Explanation:
In the first operation, choose x = 1. Now, nums = [0,4,0,2,4].
In the second operation, choose x = 2. Now, nums = [0,2,0,0,2].
In the third operation, choose x = 2. Now, nums = [0,0,0,0,0].
"""

import heapq
class Solution(object):
    def minimumOperations(self, nums):
        
        heapq.heapify(nums)
        count=0
        while len(nums)>0:
         
            val=nums[0]
            if(val==0):
                heapq.heappop(nums)
               # print("after pop 0",nums)
            else:
                nums=[item-val for item in nums]
                count+=1
               # print("after subtracting",val,"from",nums)
        return count   
    
solution=Solution()
nums=[1,5,0,3,5]
result=solution.minimumOperations(nums)
print(result)
