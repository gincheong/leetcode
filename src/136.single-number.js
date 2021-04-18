/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var answer = 0;

    nums.forEach(val => {
      answer ^= val;
    });

    return answer;
};
// @lc code=end

