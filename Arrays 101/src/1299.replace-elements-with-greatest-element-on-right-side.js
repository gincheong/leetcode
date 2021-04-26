/*
 * @lc app=leetcode id=1299 lang=javascript
 *
 * [1299] Replace Elements with Greatest Element on Right Side
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  let maxVal = -1;
  let temp;

  for (var i = arr.length - 1; i >= 0; i--) {
    temp = arr[i];
    arr[i] = maxVal;
    maxVal = Math.max(temp, maxVal);
  }

  return arr;
};
// @lc code=end

