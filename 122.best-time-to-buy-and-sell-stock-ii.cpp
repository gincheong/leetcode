/*
 * @lc app=leetcode id=122 lang=cpp
 *
 * [122] Best Time to Buy and Sell Stock II
 */
#include <iostream>
#include <vector>
using namespace std;
// @lc code=start
class Solution {
 public:
  int maxProfit(vector<int>& prices) {
    int answer = 0;

    for (int i = 1; i < prices.size(); i++) {
      if (prices[i] > prices[i - 1]) {
        answer += prices[i] - prices[i - 1];
      }
    }

    return answer;
  }
};
// @lc code=end
