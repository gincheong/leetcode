#
# @lc app=leetcode id=268 lang=python3
#
# [268] Missing Number
#
from typing import List
# @lc code=start
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        answer = 0

        for idx, val in enumerate(nums):
            answer ^= ((idx + 1) ^ val)

        return answer

        # answer = 0
        # for idx, val in enumerate(nums):
        #     answer += (idx + 1 - val)

        # return answer
        
# @lc code=end

'''
둘 다 time O(n), space O(1)
'''