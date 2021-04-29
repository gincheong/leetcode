/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
 * @param {TreeNode[]} stack
 * @return null
 */
const repeat = (node, stack) => {
  stack.push(node.val)
  if (node.left !== null) {
    repeat(node.left, stack);
  }
  
  if (node.right !== null) {
    repeat(node.right, stack);
  }
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if (root === null) {
    return [];  
  }

  const stack = [];
  repeat(root, stack);

  return stack;
};
// @lc code=end

