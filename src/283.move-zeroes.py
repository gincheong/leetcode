#
# @lc app=leetcode id=283 lang=python3
#
# [283] Move Zeroes
#
from typing import List
# @lc code=start
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        nums.sort(key=lambda x: x == 0)

# @lc code=end