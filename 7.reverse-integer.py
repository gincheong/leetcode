#
# @lc app=leetcode id=7 lang=python3
#
# [7] Reverse Integer
#

# @lc code=start
class Solution:
    def reverse(self, x: int) -> int:
        answer = ""
        
        if x < 0:
            answer += "-"

        answer += str(abs(x))[::-1]
        answer = int(answer)

        if answer >= -2**31 and answer <= 2**31 - 1:
            return answer
        else :
            return 0
            
        
# @lc code=end

