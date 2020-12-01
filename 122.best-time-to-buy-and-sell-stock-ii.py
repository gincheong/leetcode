#
# @lc app=leetcode id=122 lang=python3
#
# [122] Best Time to Buy and Sell Stock II
#

from typing import List

# @lc code=start
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # diff = [0]
        # for i in range(1, len(prices)):
        #     diff.append(prices[i] - prices[i-1])

        # return sum(filter(lambda x:x > 0, diff))

        profit = 0

        for i in range(1, len(prices)):
            if prices[i] - prices[i-1] > 0:
                profit += prices[i] - prices[i-1]

        return profit

# @lc code=end
