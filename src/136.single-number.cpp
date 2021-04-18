/*
 * @lc app=leetcode id=136 lang=cpp
 *
 * [136] Single Number
 */
#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;
// @lc code=start
class Solution {
 public:
  int singleNumber(vector<int>& nums) {
    int answer = 0;

    for (int i = 0; i < nums.size(); i++) {
      answer = nums[i] ^ answer;
    }

    return answer;
  }
};
// @lc code=end
