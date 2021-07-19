/*
 * @lc app=leetcode id=26 lang=java
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
class Solution {
  public int removeDuplicates(int[] nums) {
    int cursor = 0;

    for (int i = 1; i < nums.length; i++) {
      if (nums[i] != nums[cursor]) {
        nums[++cursor] = nums[i];
      }
    }
    
    return cursor + 1;
  }
}
// @lc code=end

