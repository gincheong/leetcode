/*
 * @lc app=leetcode id=941 lang=javascript
 *
 * [941] Valid Mountain Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  if (arr.length < 3) {
    return false;
  }

  let isIncreasing = false;
  let isDecreasing = false;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i - 1] === arr[i]) {
      // 같은 숫자가 연속되면 mountain이 아님
      return false;
    }

    if (arr[i - 1] > arr[i] && !isIncreasing) {
      // 오르막 없이 내리막부터 시작되면 mountain이 아님
      return false;
    } 
    isIncreasing = true;
    
    if (arr[i - 1] > arr[i] && isIncreasing) {
      // 오르막이 끝나고, 내리막이 시작됨
      isDecreasing = true;
    }
    
    if (arr[i - 1] < arr[i] && isDecreasing) {
      // 내리막 중인데, 다시 오르막이 보이면 mountain이 아님
      return false;
    }
  }

  return isIncreasing && isDecreasing;
};
// @lc code=end

