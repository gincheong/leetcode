import java.util.HashMap;

/*
 * @lc app=leetcode id=217 lang=java
 *
 * [217] Contains Duplicate
 */

// @lc code=start
class Solution {
  public boolean containsDuplicate(int[] nums) {
    HashMap<Integer, Boolean> map = new HashMap<Integer, Boolean>();

    for (int each : nums) {
      if (map.containsKey(each)) {
        return true;
      }
      map.put(each, true);
    }
    
    return false;
  }
}
// @lc code=end

