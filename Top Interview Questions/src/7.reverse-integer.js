/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const MIN = -(2 ** 31);
  const MAX = 2 ** 31 - 1;

  var flag = 1;
  if (x < 0) {
    var flag = -1;
    x *= -1;
  }

  var answer = 0;
  while (x > 0) {
    var num = x % 10;
    x = parseInt(x / 10);

    answer = (answer * 10) + num;
    if (answer < MIN || answer > MAX) {
      return 0;
    }
  }

  return answer * flag;
};
// @lc code=end

