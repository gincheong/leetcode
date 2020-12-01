#
# @lc app=leetcode id=26 lang=python3
#
# [26] Remove Duplicates from Sorted Array
#
from typing import List
# @lc code=start
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        cursor = 1
        for i in range(1, len(nums)):
            if nums[i-1] == nums[i]:
                continue
            else:
                nums[cursor] = nums[i]
                cursor += 1
        
        return cursor
        
# @lc code=end

print(Solution.removeDuplicates(None, [1, 1, 2]))
print(Solution.removeDuplicates(None, [0,0,1,1,1,2,2,3,3,4]))

