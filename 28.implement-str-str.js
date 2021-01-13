/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle.length == 0) {
    return 0;
  } else if (haystack.length == 0) {
    return -1;
  }

  for (var cursor = 0; cursor < haystack.length - needle.length + 1; cursor++) {
    if (haystack[cursor] == needle[0]) {
      for (var i = 0; i < needle.length; i++) {
        if (haystack[cursor + i] != needle[i]) {
          break;
        }
      }
      if (i == needle.length) {
        return cursor;
      }
    }
  }

  return -1;
};
// @lc code=end

