/*
 * @lc app=leetcode id=344 lang=cpp
 *
 * [344] Reverse String
 */
#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;
// @lc code=start
class Solution {
 public:
  void reverseString(vector<char>& s) {
    // 1-line solution
    // reverse(s.begin(), s.end());

    for (int i = 0; i < s.size() / 2; i++) {
      int temp = s[i];
      s[i] = s[s.size() - 1 - i];
      s[s.size() - 1 - i] = temp;
    }
  }
};
// @lc code=end
