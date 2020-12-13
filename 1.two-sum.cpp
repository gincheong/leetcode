/*
 * @lc app=leetcode id=1 lang=cpp
 *
 * [1] Two Sum
 */
#include <vector>
using namespace std;
// @lc code=start
class Solution {
 public:
  vector<int> twoSum(vector<int>& nums, int target) {
    for (int left = 0; left < nums.size() - 1; left++) {
      for (int right = left + 1; right < nums.size(); right++) {
        if (nums[left] + nums[right] == target) {
          return vector<int>{left, right};
        }
      }
    }
    return vector<int>{0, 0};
  }
};
// @lc code=end
