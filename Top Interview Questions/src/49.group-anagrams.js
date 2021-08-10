/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const anagrams = new Map();

  strs.forEach(each => {
    const key = makeSortedKey(each);
    if (anagrams.has(key)) {
      anagrams.get(key).push(each);
    } else {
      anagrams.set(key, [each]);
    }
  });

  return Array.from(anagrams.values());
};

/**
 * @param {string} word
 * @return {string}
 */
var makeSortedKey = (word) => {
  return word.split('').sort().join('');
};
// @lc code=end

