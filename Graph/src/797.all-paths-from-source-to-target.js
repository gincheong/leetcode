/*
 * @lc app=leetcode id=797 lang=javascript
 *
 * [797] All Paths From Source to Target
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  const N = graph.length - 1;
  const answer = [];

  const repeat = (current, history) => { 
    history += `,${current}`;
    
    // 종료 조건
    if (current === N) { 
      answer.push(history.split(',').slice(1));
      return;
    }

    const canVisit = graph[current];

    for (var i = 0; i < canVisit.length; i++) {
      repeat(canVisit[i], history);
    }
  };

  repeat(0, "");

  return answer;
};
// @lc code=end

chro