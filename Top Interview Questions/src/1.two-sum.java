/*
 * @lc app=leetcode id=1 lang=java
 *
 * [1] Two Sum
 */

// @lc code=start
class Solution {
  public int[] twoSum(int[] nums, int target) {
    int[] answer = new int[2];

    outer: for (int i = 0; i < nums.length - 1; i++) {
      for (int j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] == target) {
          answer[0] = i;
          answer[1] = j;
          break outer;
        }
      }
    }

    return answer;
  }
}
// @lc code=end

