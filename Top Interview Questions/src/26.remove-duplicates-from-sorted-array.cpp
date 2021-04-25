/*
 * @lc app=leetcode id=26 lang=cpp
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
#include <iostream>
#include <vector>

using namespace std;
class Solution {
 public:
  int removeDuplicates(vector<int>& nums) {
    int count = 0;

    if (nums.size() > 0) {
      for (int i = 1; i < nums.size(); i++) {
        if (nums[count] != nums[i]) {
          count++;
          nums[count] = nums[i];
        }
      }
      count++;
    }
    return count;
  }
};
// @lc code=end
