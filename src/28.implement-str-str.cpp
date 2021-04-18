/*
 * @lc app=leetcode id=28 lang=cpp
 *
 * [28] Implement strStr()
 */
#include <iostream>
#include <string>
using namespace std;
// @lc code=start
class Solution {
 public:
  int strStr(string haystack, string needle) {
    int search_count = haystack.size() - needle.size() + 1;
    for (int i = 0; i < search_count; i++) {
      if (haystack.compare(i, needle.size(), needle) == 0) {
        return i;
      }
    }

    return -1;
  }
};
// @lc code=end
