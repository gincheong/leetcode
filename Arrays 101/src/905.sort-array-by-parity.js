/*
 * @lc app=leetcode id=905 lang=javascript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  let left = 0;
  let right = A.length - 1;

  while (left < right) {
    if (A[left] % 2 === 1 && A[right] % 2 === 0) {
      // swap
      let temp = A[left];
      A[left] = A[right];
      A[right] = temp;
    }

    if (A[left] % 2 === 0) {
      left++;
    }
    if (A[right] % 2 === 1) {
      right--;
    }
  }

  return A;
};
// @lc code=end

