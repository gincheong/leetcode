/*
 * @lc app=leetcode id=14 lang=cpp
 *
 * [14] Longest Common Prefix
 */
#include <string>
#include <vector>
using namespace std;
// @lc code=start
class Solution {
 public:
  string longestCommonPrefix(vector<string>& strs) {
    if (strs.size() == 0) {
      return "";
    }
    string prefix = strs.front();

    for (int i = 1; i < strs.size(); i++) {
      prefix = find_prefix(prefix, strs[i]);
    }
    return prefix;
  }

  string find_prefix(string prefix, string s2) {
    int idx = prefix.size();
    while (idx > 0) {
      if (s2.substr(0, idx) == prefix.substr(0, idx)) {
        return prefix.substr(0, idx);
      }
      idx--;
    }
    return "";
  }
};
// @lc code=end

// ["flower","flower","flower","flower"]