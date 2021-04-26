/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

  let cursor = 0;
  let zeroCount = 0;
  
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++;
    } else {
      nums[cursor++] = nums[i];
    }
  }

  for (var i = 0; i < zeroCount; i++) {
    nums[cursor++] = 0;
  }

};
// @lc code=end

