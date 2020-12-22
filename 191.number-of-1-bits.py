#
# @lc app=leetcode id=191 lang=python3
#
# [191] Number of 1 Bits
#

# @lc code=start
class Solution:
    def hammingWeight(self, n: int) -> int:
        count = 0
        while n != 0:
            if n % 2 == 1:
                count += 1
            n //= 2
        return count
        # 비트연산이 실행시간 훨씬 이득임 재시ㅗㄷ ㄱ

# @lc code=end

