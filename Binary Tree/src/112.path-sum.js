/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
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
 * @param {number} targetSum
 * @return {boolean}
 */
const repeat = (node, targetSum) => {
  if (!node) {
    return false;
  }

  if (!node.left && !node.right && targetSum - node.val === 0) {
    // leaf에 도달했고, targetSum을 완성시킬 수 있으면
    return true;
  }

  return repeat(node.left, targetSum - node.val) || repeat(node.right, targetSum - node.val);
}
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (root === null) {
    return false;
  }

  return repeat(root, targetSum);
};
// @lc code=end

