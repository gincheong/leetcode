/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

  let cursor = 0;
  nums.forEach(each => {
    if (each !== val) {
      nums[cursor++] = each;
    }
  });

  return cursor;
};
// @lc code=end

