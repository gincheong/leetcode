#
# @lc app=leetcode id=326 lang=python3
#
# [326] Power of Three
#
from math import log10
# @lc code=start
class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        if n <= 0:
            return False

        result = log10(n) / log10(3)
        # log(n, 3) 하면 부동소수점 표현 때문에 log(243, 3)이 5가 아닌 4.9999...로 계산됨

        return True if result == int(result) else False
        
# @lc code=end

'''
O(1), O(1) solution

3은 소수이기 때문에, 3^n은 3^(1 ~ n)의 수로만 나누어 떨어진다.
그러므로 integer 범위 내의 3의 최대 제곱수를 구하고, 해당 수를 나누었을 때 나머지가 없는 수가
3의 제곱수가 될 것.

다양한 소수값에 모두 해당되는 규칙이다.

로그로 풀고 잘했다 생각했는데 전혀 아니었음
'''