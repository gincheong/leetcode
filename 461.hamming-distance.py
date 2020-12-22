 #
# @lc app=leetcode id=461 lang=python3
#
# [461] Hamming Distance
#

# @lc code=start
class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        x_xor_y = x ^ y
        mask = 1
        count = 0
        while x_xor_y >= mask:
            if x_xor_y & mask != 0:
                count += 1
            mask = mask << 1
        
        return count

# @lc code=end