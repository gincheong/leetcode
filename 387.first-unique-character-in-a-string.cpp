/*
 * @lc app=leetcode id=387 lang=cpp
 *
 * [387] First Unique Character in a String
 */
#include <iostream>
#include <set>
#include <string>
#include <unordered_map>
using namespace std;
// @lc code=start
class Solution {
 public:
  int firstUniqChar(string s) {
    unordered_map<char, int> alphabets;

    for (int i = 0; i < s.size(); i++) {
      if (alphabets.find(s[i]) == alphabets.end()) {
        alphabets.insert({s[i], 1});
      } else {
        alphabets[s[i]]++;
      }
    }

    for (int i = 0; i < s.size(); i++) {
      if (alphabets[s[i]] == 1) {
        return s.find(s[i]);
      }
    }
    return -1;

    // set<char> history;

    // for (int i = 0; i < s.size(); i++) {
    //   if (history.find(s[i]) == history.end()) {
    //     // not visited

    //     if (s.substr(i + 1, string::npos).find(s[i]) == string::npos) {
    //       // not found
    //       return i;
    //     } else {
    //       history.insert(s[i]);
    //     }
    //   }
    // }

    // return -1;
  }
};
// @lc code=end
