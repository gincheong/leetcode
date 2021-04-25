/*
 * @lc app=leetcode id=66 lang=cpp
 *
 * [66] Plus One
 */
#include <iostream>
#include <string>
#include <vector>
using namespace std;
// @lc code=start
class Solution {
 public:
  vector<int> plusOne(vector<int>& digits) {
    bool flag = true;
    for (int i = digits.size() - 1; i >= 0; i--) {
      if (flag == true && digits[i] == 9) {
        digits[i] = 0;
        flag = true;
      } else if (flag) {
        digits[i]++;
        flag = false;
      }
    }
    if (flag) {
      digits.insert(digits.begin(), 1);
    }

    return digits;
  }
};
// @lc code=end
