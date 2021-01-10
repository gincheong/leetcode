/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

  var carry = false;
  digits[digits.length - 1]++;
  if (digits[digits.length - 1] === 10) {
    carry = true;
    digits[digits.length - 1] = 0;
  }

  for (var i = digits.length - 2; i >= 0; i--) {
    if (carry) {
      if (digits[i] === 9) {
        digits[i] = 0;
      } else {
        digits[i] += 1;
        carry = false;
      }
    }
  }

  if (carry) {
    digits.splice(0, 0, 1);
  }
  return digits;
};

// @lc code=end

