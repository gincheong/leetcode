/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length == 0) {
    return '';
  }

  var prefix = strs[0];

  for (var i = 1; i < strs.length; i++) {
    prefix = getPrefix(prefix, strs[i]);
    if (prefix === '') {
      return prefix;
    }
  }

  return prefix;
};

/**
 * @param {string} strA
 * @param {string} strB
 * @return {string}
 */
var getPrefix = (strA, strB) => {
  var minLength = Math.min(strA.length, strB.length);

  for (var i = minLength; i >= 0; i--) {
    if (strA.substr(0, i) === strB.substr(0, i)) {
      return strA.substr(0, i);
    }
  }
}
// @lc code=end

