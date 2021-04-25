/*
 * @lc app=leetcode id=1089 lang=javascript
 *
 * [1089] Duplicate Zeros
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
  const numbers = [];

  arr.forEach(val => {
    if (val === 0) {
      numbers.push(0);
      numbers.push(0);
    } else {
      numbers.push(val);
    } 
  });
  
  arr.forEach((val, idx, origin) => {
    origin[idx] = numbers[idx];
  });

};
// @lc code=end

