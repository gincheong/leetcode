/*
 * @lc app=leetcode id=28 lang=java
 *
 * [28] Implement strStr()
 */

// @lc code=start
class Solution {
  public int strStr(String haystack, String needle) {
    outer: for (int i = 0; i < haystack.length() - needle.length() + 1; i++) {
      for (int j = 0; j < needle.length(); j++) {
        if (haystack.charAt(i + j) == needle.charAt(j)) {
          ;
        } else {
          continue outer;
        }
      }

      return i;
    }

    return -1;
  }
}
// @lc code=end

