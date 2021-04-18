/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

  var alphabets = {};
  
  for (var i = 0; i < s.length; i++) {
    var char = s[i];
    if (char in alphabets) {
      alphabets[char]++;
    } else {
      alphabets[char] = 1;
    }
  }

  for (var i = 0; i < t.length; i++) {
    var char = t[i];
    if (char in alphabets) {
      alphabets[char]--;
    } else {
      return false;
    }
  }

  for (key in alphabets) {
    if (alphabets[key] > 0) {
      return false;
    }
  }

  return true;
};
// @lc code=end

