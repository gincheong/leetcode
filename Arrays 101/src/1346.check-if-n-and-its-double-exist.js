/*
 * @lc app=leetcode id=1346 lang=javascript
 *
 * [1346] Check If N and Its Double Exist
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  const history = [];

  for (var i = 0; i < arr.length; i++) {
    if (history.includes(arr[i] / 2) || history.includes(arr[i] * 2)) {
      return true;
    }

    history.push(arr[i]);
  }

  return false;
};
// @lc code=end

