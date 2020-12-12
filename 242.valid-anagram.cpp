/*
 * @lc app=leetcode id=242 lang=cpp
 *
 * [242] Valid Anagram
 */
#include <iostream>
#include <map>
#include <string>
using namespace std;
// @lc code=start
class Solution {
 public:
  bool isAnagram(string s, string t) {
    if (s.size() != t.size()) {
      return false;
    }

    map<char, int> alpha;
    for (int i = 0; i < s.size(); i++) {
      if (alpha.find(s[i]) == alpha.end()) {
        alpha.insert({s[i], 1});
      } else {
        alpha[s[i]]++;
      }
    }

    for (int i = 0; i < t.size(); i++) {
      if (alpha.find(t[i]) == alpha.end()) {
        return false;
      } else {
        alpha[t[i]]--;
      }
    }

    map<char, int>::iterator iter;
    for (iter = alpha.begin(); iter != alpha.end(); iter++) {
      if (iter->second != 0) {
        return false;
      }
    }

    return true;
  }
};
// @lc code=end
