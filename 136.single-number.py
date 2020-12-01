#
# @lc app=leetcode id=136 lang=python3
#
# [136] Single Number
#
from typing import List
# @lc code=start
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        nums.sort()

        for i in range(1, len(nums)-1):
            if nums[i] != nums[i-1] and nums[i] != nums[i+1]:
                return nums[i]
        
        if len(nums) > 1:
            if nums[0] != nums[1]:
                return nums[0]
            else:
                return nums[-1]
        else:
            return nums[0]
        
            
# @lc code=end

for each in [[2,2,1], [4,1,2,1,2], [1]]:
    print(Solution.singleNumber(None, each))