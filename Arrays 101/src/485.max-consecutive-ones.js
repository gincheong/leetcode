/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  
  let answer = 0;
  let count = 0;
  nums.forEach(val => {
    if (val === 1) {
      count ++;
    } else {
      answer = answer > count ? answer : count;
      count = 0;
    }
  });

  answer = answer > count ? answer : count;

  return answer;
};
// @lc code=end

