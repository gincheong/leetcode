/*
 * @lc app=leetcode id=1295 lang=javascript
 *
 * [1295] Find Numbers with Even Number of Digits
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let answer = 0;
  nums.forEach(val => {
    if (val.toString().length % 2 === 0) {
      answer++;
    }
  });
  return answer;
};
// @lc code=end

