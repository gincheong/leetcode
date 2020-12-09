/*
 * @lc app=leetcode id=283 lang=cpp
 *
 * [283] Move Zeroes
 */
#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;
// @lc code=start
class Solution {
 public:
  void moveZeroes(vector<int>& nums) {
    int cursor = 0;
    int zeroCount = 0;
    for (int i = 0; i < nums.size(); i++) {
      if (nums[i] == 0) {
        zeroCount++;
      } else {
        nums[cursor] = nums[i];
        cursor++;
      }
    }

    for (cursor; cursor < nums.size(); cursor++) {
      nums[cursor] = 0;
    }
  }
};
// @lc code=end
