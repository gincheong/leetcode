#
# @lc app=leetcode id=204 lang=python3
#
# [204] Count Primes
#

# @lc code=start
class Solution:
    def countPrimes(self, n: int) -> int:
        if n <= 1:
            return 0

        numbers = [True for _ in range(n)]
        numbers[0] = False
        numbers[1] = False

        for i in range(2, int(n ** 0.5 + 1)):
            if not numbers[i]:
                continue

            cursor = i * 2
            while cursor < n:
                numbers[cursor] = False
                cursor += i

        return numbers.count(True)
# @lc code=end

