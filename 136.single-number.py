#
# @lc app=leetcode id=136 lang=python3
#
# [136] Single Number
#
from typing import List
# @lc code=start
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        result = 0

        for each in nums:
            result = result ^ each
            # XOR 비트 연산
        
        return result
    
# @lc code=end

for each in [[2,2,1], [4,1,2,1,2], [1]]:
    print(Solution.singleNumber(None, each))
    print()