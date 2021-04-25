/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 */

// Definition for a binary tree node.
class TreeNode {
  constructor(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

// @lc code=start
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
  if (!root) {
    return [];
  }

  const answer = [];
  const stack = [root];
   
  let level;
  let node;
  let loopCount;
  while (stack.length > 0) {
    loopCount = stack.length;
    level = [];
    for (let i = 0; i < loopCount; i++) {
      node = stack.shift();
      level.push(node.val);

      if (node.left) { stack.push(node.left); }
      if (node.right) { stack.push(node.right); }
    }
    answer.push(level); 
  }

  return answer;
};
// @lc code=end

