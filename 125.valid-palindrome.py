#
# @lc app=leetcode id=125 lang=python3
#
# [125] Valid Palindrome
#

# @lc code=start
import re
class Solution:
    def isPalindrome(self, s: str) -> bool:
        pattern = re.compile("[a-zA-Z0-9]") # remove non-alphanumeric
        converted = "".join(pattern.findall(s)).lower()
        
        for i in range(len(converted) // 2):
            if converted[i] != converted[-(i+1)]:
                return False
        return True

        # left = 0
        # right = len(s) - 1
        
        # while left < right:
        #     if not s[left].isalnum():
        #         left += 1
        #     elif not s[right].isalnum():
        #         right -= 1
        #     else: 
        #         if s[left].lower() != s[right].lower():
        #             return False

        #         left += 1
        #         right -= 1
        
        # return True

# @lc code=end