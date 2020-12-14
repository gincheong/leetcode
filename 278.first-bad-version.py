#
# @lc app=leetcode id=278 lang=python3
#
# [278] First Bad Version
#
from math import ceil
# @lc code=start
# The isBadVersion API is already defined for you.
# @param version, an integer
# @return an integer
# def isBadVersion(version):

class Solution:
    def firstBadVersion(self, n: int) -> int:
        m = 1
        oldest_bad_version = n
        while m <= n:
            target = (m + n) // 2
            if isBadVersion(target):
                oldest_bad_version = target
                n = target - 1
            else:
                m = target + 1
            
        return oldest_bad_version

# @lc code=end