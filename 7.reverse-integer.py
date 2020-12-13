#
# @lc app=leetcode id=7 lang=python3
#
# [7] Reverse Integer
#

# @lc code=start
class Solution:
    def reverse(self, x: int) -> int:
        MAX_INT = 2**31 - 1
        MIN_INT = -2**31
        
        flag = -1 if x < 0 else 1
        x = abs(x)

        result = 0
        while x != 0:
            remain = x % 10
            x //= 10

            result = result * 10 + remain
        
        result *= flag
        if result < MIN_INT or result > MAX_INT:
            return 0
        return result

# @lc code=end

"""
`s = (x > 0) - (x < 0)`
센스 ㄷㄷ
"""

print(Solution.reverse(None, 1563847412))