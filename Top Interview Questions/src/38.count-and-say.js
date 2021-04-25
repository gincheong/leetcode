/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {

  var string = '1';

  for (var i = 2; i <= n; i++) {
    var temp = '';

    var char = string[0];
    var count = 1;
    for (var j = 1; j < string.length; j++) {
      if (string[j] != char) {
        temp = temp + count.toString() + char;
        count = 1;
        char = string[j];
      } else {
        count++;
      }
    }
    string = temp + count.toString() + char;
  }

  return string;
};
// @lc code=end

