#
# @lc app=leetcode id=190 lang=python3
#
# [190] Reverse Bits
#

# @lc code=start
class Solution:
    def reverseBits(self, n: int) -> int:
        base = 0b00000000000000000000000000000000

        mask1 = 1
        mask2 = 0b10000000000000000000000000000000

        for _ in range(32):
            if n & mask1 != 0:
                base |= mask2

            mask1 <<= 1
            mask2 >>= 1

        return base

# @lc code=end

'''
괜찮게 풀긴 했는데 Solution에 있는 다른 풀이들 공부할 것
'''
