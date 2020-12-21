#
# @lc app=leetcode id=198 lang=python3
#
# [198] House Robber
#
from typing import List
# @lc code=start
class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        elif len(nums) == 1:
            return nums[0]

        dp = [0] + nums

        for i in range(2, len(dp)):
            dp[i] = max(dp[i - 1], dp[i] + dp[i - 2])
        
        return max(dp)

# @lc code=end
