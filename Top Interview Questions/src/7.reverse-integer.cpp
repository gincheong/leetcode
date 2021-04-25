/*
 * @lc app=leetcode id=7 lang=cpp
 *
 * [7] Reverse Integer
 */
#include <iostream>
#include <limits>
using namespace std;
// @lc code=start
class Solution {
 public:
  int reverse(int x) {
    int answer = 0;

    while (x != 0) {
      int remain = x % 10;
      x /= 10;

      if ((answer > INT_MAX / 10) || (answer == INT_MAX / 10 && remain > 8)) {
        return 0;
      }
      if ((answer < INT_MIN / 10) || (answer == INT_MIN / 10 && remain < -7)) {
        return 0;
      }

      answer = answer * 10 + remain;
    }

    return answer;
  }
};
// @lc code=end
