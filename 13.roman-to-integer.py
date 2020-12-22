#
# @lc app=leetcode id=13 lang=python3
#
# [13] Roman to Integer
#

# @lc code=start
class Solution:
    def romanToInt(self, s: str) -> int:
        symbol = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
        answer = 0
        prev = 0
        for each in s:
            current = symbol[each]
            if current > prev:
                answer -= prev
            else:
                answer += prev
            prev = current
        answer += prev

        return answer

# @lc code=end

