/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const flag = new Array(nums.length + 1).fill(0);
  flag[0] = 1;

  nums.forEach(val => {
    flag[val]++;
  });
  
  const answer = [];
  flag.forEach((val, idx) => {
    if (val === 0) {
       answer.push(idx);
    }
  });

  return answer;
};
// @lc code=end

