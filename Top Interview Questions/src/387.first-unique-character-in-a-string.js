/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  var history = [];

  for (var i = 0; i < s.length; i++) {
    if (history.indexOf(s[i]) === -1) {
      if (s.slice(i + 1, s.length).indexOf(s[i]) === -1) {
        return i;
      } else {
        history.push(s[i]);
      }
    }
  }
  
  return -1;
};
// @lc code=end

