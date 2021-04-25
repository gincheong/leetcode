#
# @lc app=leetcode id=28 lang=python3
#
# [28] Implement strStr()
#

# @lc code=start
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        # if len(needle) < 1:
        #     return 0

        # for i in range(len(haystack) - len(needle) + 1):
        #     for j in range(len(needle)):
        #         if needle[j] == haystack[i + j]:
        #             if j == len(needle) - 1:
        #                 # 끝자리까지 다 일치하면
        #                 return i
        #         else:
        #             break

        # return -1

        if needle in haystack:
            return haystack.index(needle)
        else:
            return -1

# @lc code=end