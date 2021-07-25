/*
 * @lc app=leetcode id=242 lang=java
 *
 * [242] Valid Anagram
 */

// @lc code=start
class Solution {
  public boolean isAnagram(String s, String t) {
    if (s.length() != t.length()) {
      return false;
    }

    // java는 character가 int로 변환될 수 있으니 그걸 이용해서
    // map 대신 array로 해결 가능 -> 속도 더 빠름
    int[] table = new int[26];
    for (int i = 0; i < s.length(); i++) {
      table[s.charAt(i) - 'a']++;
    }

    for (int i = 0; i < t.length(); i++) {
      table[t.charAt(i) - 'a']--;
      if (table[t.charAt(i) - 'a'] < 0) {
        return false;
      }
    }
    return true;
  }
}
// @lc code=end

