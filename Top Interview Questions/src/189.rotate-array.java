/*
 * @lc app=leetcode id=189 lang=java
 *
 * [189] Rotate Array
 */

// @lc code=start
class Solution {
  public void rotate(int[] nums, int k) {
    k %= nums.length;
  
    int[] answer = new int[nums.length];

    System.arraycopy(nums, nums.length - k, answer, 0, k);
    System.arraycopy(nums, 0, answer, k, nums.length - k);

    System.arraycopy(answer, 0, nums, 0, nums.length);
  }
}
// @lc code=end

