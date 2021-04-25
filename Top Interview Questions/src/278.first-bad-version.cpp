/*
 * @lc app=leetcode id=278 lang=cpp
 *
 * [278] First Bad Version
 */

// The API isBadVersion is defined for you.
bool isBadVersion(int version);
// @lc code=start

class Solution {
public:
  int firstBadVersion(int n) {
    int answer;
    unsigned int i = 1;
    unsigned int j = n;
    unsigned int target_idx;
    while (i <= j) {
      target_idx = (i + j) / 2;

      if (isBadVersion(target_idx)) {
        answer = target_idx;
        j = target_idx - 1;
      } else {
        i = target_idx + 1;
      }
    }

    return answer;
  }
};
// @lc code=end

