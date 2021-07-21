/*
 * @lc app=leetcode id=136 lang=java
 *
 * [136] Single Number
 */

// @lc code=start
class Solution {
  public int singleNumber(int[] nums) {
    int temp = 0;

    for (int each : nums) {
      temp ^= each;
    }

    return temp;
  }
}
// @lc code=end

