/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var cursor = 0;
  for (var i = 0; i < nums.length; i++) {

    if (nums[i] !== nums[cursor]) {
      cursor++;
      nums[cursor] = nums[i];
    }
  }
  return cursor + 1;
};
// @lc code=end

