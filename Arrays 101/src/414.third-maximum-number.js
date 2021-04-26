/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  const uniqueNums = new Set(nums);
  
  if (uniqueNums.size < 3) { return Math.max.apply(null, nums); } // n

  uniqueNums.delete(Math.max.apply(null, [...uniqueNums])); // n
  uniqueNums.delete(Math.max.apply(null, [...uniqueNums])); // n

  return Math.max.apply(null, [...uniqueNums]);
};
// @lc code=end

