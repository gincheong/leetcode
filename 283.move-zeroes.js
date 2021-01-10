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
  var zeroCount = 0;
  var cursor = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++;
    } else {
      nums[cursor] = nums[i];
      cursor++;
    }

    if ((cursor + zeroCount) === nums.length) {
      break;
    }
  }

  for (var i = 0; i < zeroCount; i++) {
    nums[cursor++] = 0;
  }

};
// @lc code=end

