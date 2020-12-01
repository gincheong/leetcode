#
# @lc app=leetcode id=5 lang=python3
#
# [5] Longest Palindromic Substring
#

# @lc code=start
class Solution:
    def longestPalindrome(self, s: str) -> str:
        asd = ""
        for each in s:
            if s.count(each) > 1:
                asd += each
            else:
                asd += "#"
        print(asd)

    def sliceString(self, string: str) -> (str, str):
        half = len(string) // 2
        if len(string) % 2 == 0:
            # 짝수길이
            print(string[:half], string[half:])
        else:
            # center = string[half]
            print(string[:half], string[half+1:])
        
# @lc code=end

s = Solution()
for each in ["babad", "cbbd", "ac", "a", "dasdfdsaas"]:
    s.longestPalindrome(each)