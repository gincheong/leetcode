/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */

// Definition for a binary tree node.
class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

// @lc code=start

/**
 * @param {TreeNode} node
 * @param {number} depth
 * @return {number}
 */
const repeat = (node, depth = 0) => {
  if (node === null) {
    return depth;
  }
  return Math.max(repeat(node.left, depth + 1), repeat(node.right, depth + 1));
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
  return repeat(root);
};
// @lc code=end

