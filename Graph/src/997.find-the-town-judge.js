/*
 * @lc app=leetcode id=997 lang=javascript
 *
 * [997] Find the Town Judge
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
  var trustCount = new Array(N).fill(0);

  trust.forEach(each => {
    var [a, b] = each;
    trustCount[b - 1] += 1;
    trustCount[a - 1] -= 1;
  });

  var answer = -1;

  for (var i = 0; i < trustCount.length; i++) {
    if (trustCount[i] === N - 1) {
      answer = i + 1;
      break;
    }
  }
  
  return answer;
};
// @lc code=end

