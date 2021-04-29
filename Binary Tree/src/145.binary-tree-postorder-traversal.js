/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
 */

// Definition for a binary tree node.
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
// @lc code=start
/**
 * @param {TreeNode} node
 * @param {number[]} stack
 * @return null
 */
const repeat = (node, stack) => {
  if (node.left !== null) {
    repeat(node.left, stack);
  }

  if (node.right !== null) {
    repeat(node.right, stack);
  }

  stack.push(node.val);
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  if (root === null) {
    return [];
  }
  
  const stack = [];
  repeat(root, stack);
  return stack;
};
// @lc code=end

