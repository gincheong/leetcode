#
# @lc app=leetcode id=66 lang=python3
#
# [66] Plus One
#
from typing import List
# @lc code=start
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        length = len(digits)
        carry = True
        for i in reversed(range(length)):

            if carry:
                if digits[i] == 9:
                    digits[i] = 0
                else:
                    digits[i] += 1
                    carry = False
        
        if carry:
            digits = [1] + digits
        
        return digits

# @lc code=end