#
# @lc app=leetcode id=344 lang=python3
#
# [344] Reverse String
#
from typing import List
# @lc code=start
class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """

        for i in range(len(s) // 2):
            s[i], s[-(i+1)] = s[-(i+1)], s[i]

        #
        
# @lc code=end

"""
478/478 cases passed (172 ms)
Your runtime beats 99.96 % of python3 submissions
Your memory usage beats 26.13 % of python3 submissions (18.6 MB)
time: O(n)
space: O(1)

Solution의 해설
Life is short, use Python.
`s.reverse()`
"""