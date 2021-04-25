#
# @lc app=leetcode id=14 lang=python3
#
# [14] Longest Common Prefix
#
from typing import List
# @lc code=start
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if len(strs) > 0:
            prefix = strs[0]
            for i in range(1, len(strs)):
                each = strs[i]

                while True:
                    if each[:len(prefix)] == prefix:
                        break
                    elif prefix == "":
                        return prefix
                    prefix = prefix[:-1]                        

            return prefix
        else:
            return ""

# @lc code=end
s = Solution()
print(s.longestCommonPrefix(["flower","flow","flight"]))