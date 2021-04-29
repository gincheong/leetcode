/*
 * @lc app=leetcode id=429 lang=javascript
 *
 * [429] N-ary Tree Level Order Traversal
 */


// Definition for a Node.
class Node {
  /**
   * @param {number} val
   * @param {Node[]} children
   */
  constructor(val, children) {
    this.val = val;
    this.children = children;
  }
};

// @lc code=start
/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) {
    return [];
  }

  const answer = [];
  let stack = [root];
  while (stack.length > 0) {
    let level = [];
    
    let length = stack.length;
    for (var i = 0; i < length; i++) {
      let node = stack.shift();
      level.push(node.val);

      if (node.children !== null) {
        stack.push(...node.children);
      }
    }
    answer.push(level);
  };

  return answer;
};
// @lc code=end

