#
# @lc app=leetcode id=217 lang=python3
#
# [217] Contains Duplicate
#
from typing import List
# @lc code=start
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        if len(set(nums)) != len(nums):
            return True
        return False
# @lc code=end
'''
time: O(n)
space: O(n)
'''