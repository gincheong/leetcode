/*
 * @lc app=leetcode id=14 lang=java
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
class Solution {
  public String longestCommonPrefix(String[] strs) {
    if (strs.length == 1) {
      return strs[0];
    }

    StringBuilder prefix = new StringBuilder();

    // 첫 번째 글자를 기준으로 prefix 생성
    for (int i = 0; i < strs[0].length(); i++) {
      prefix.append(strs[0].charAt(i));
      
      for (String each : strs) {
        if (each.indexOf(prefix.toString()) == 0) {
          ;
        } else {
          // prefix가 아닌 게 발견되면, 바로 이전 prefix까지가 정답임
          prefix.setLength(prefix.length() - 1);
          return prefix.toString();
        }
      }
    }

    return prefix.toString();
  }
}
// @lc code=end

