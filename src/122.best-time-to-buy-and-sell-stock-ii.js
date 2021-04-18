/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var sum = 0;

    for (var i = 1; i < prices.length; i++) {
      if (prices[i] > prices[i - 1]) {
        sum += (prices[i] - prices[i - 1]);
      }
    }
    return sum;
};
// @lc code=end

