/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 */

// Definition for a binary tree node.
class TreeNode {
  consturctor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
// @lc code=start
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) {
    return [];
  }

  const history = [];
  const stack = [root];
  let level = [];

  let node;
  let stackLength;
  while (stack.length > 0) {
    stackLength = stack.length;
    level = [];
    for (var i = 0; i < stackLength; i++) {
      node = stack.pop();
      level.push(node.val);

      if (node.left) {
        stack.unshift(node.left);
      }
      if (node.right) {
        stack.unshift(node.right);
      }
    }

    history.push(level);
  }
   
  return history;
};
// @lc code=end

