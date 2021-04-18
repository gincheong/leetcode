#
# @lc app=leetcode id=121 lang=python3
#
# [121] Best Time to Buy and Sell Stock
#
from typing import List
# @lc code=start
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if not prices:
            return 0

        max_profit = 0
        min_value = prices[0]
        
        for i in range(len(prices)):
            if prices[i] < min_value:
                min_value = prices[i]
            elif prices[i] - min_value > max_profit:
                max_profit = prices[i] - min_value

        return max_profit

# @lc code=end

Solution.maxProfit(None, [7, 1, 5, 3, 6, 4])