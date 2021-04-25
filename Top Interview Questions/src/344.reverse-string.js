/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  var b = s.length - 1;
  for (var a = 0; a < parseInt(s.length / 2); a++) {
    var temp = s[a];
    s[a] = s[b];
    s[b] = temp;
    b--;
  }
};
// @lc code=end

