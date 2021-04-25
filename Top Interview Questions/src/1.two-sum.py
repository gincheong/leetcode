#
# @lc app=leetcode id=1 lang=python3
#
# [1] Two Sum
#
from typing import List
# @lc code=start
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        
        for idx, val in enumerate(nums):
            tempTarget = target - val
            if tempTarget in nums and nums.index(tempTarget) != idx:
                return [idx, nums.index(tempTarget)]

# @lc code=end

"""
time: O(n)
space: O(n)
"""