import java.util.HashMap;

/*
 * @lc app=leetcode id=387 lang=java
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
class Solution {
  public int firstUniqChar(String s) {
    HashMap<Character, Boolean> map = new HashMap<>();

    outer: for (int i = 0; i < s.length(); i++) {
      
      if (map.containsKey(s.charAt(i))) {
        continue;
      }

      map.put(s.charAt(i), true);
      for (int j = i + 1; j < s.length(); j++) {
        if (s.charAt(i) == s.charAt(j)) {
          continue outer;
        }
      }

      return i;
    }

    return -1;
  }
}
// @lc code=end
