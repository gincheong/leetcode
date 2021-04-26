/*
 * @lc app=leetcode id=1051 lang=javascript
 *
 * [1051] Height Checker
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {

  const numCount = new Array(heights.length + 1).fill(0);
  heights.forEach(val => numCount[val]++);
  // 각 숫자가 사용된 수 저장

  let diffCount = 0;
  let cursor = 0; // 숫자 0인 경우는 없으니 첫 번째 인덱스는 걸러도 됨
  for (var i = 0; i < heights.length; i++) {
    while (numCount[cursor] === 0) {
      // 사용되지 않은 숫자면, 다음 숫자로 넘어감
      cursor++;
    }

    numCount[cursor]--;
    if (heights[i] !== cursor) {
      diffCount++;
    }
  }
  
  return diffCount;
};
// @lc code=end

