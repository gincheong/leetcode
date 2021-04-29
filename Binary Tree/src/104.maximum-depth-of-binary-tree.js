/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */


// Definition for a binary tree node.
class TreeNode {
  /**
   * @param {number} val
   * @param {TreeNode} left
   * @param {TreeNode} right
   */
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// @lc code=start
/**
 * @param {TreeNode} node
 * @param {number} depth
 * @return {number}
 */
const repeat = (node, depth) => {
  if (node === null) {
    return depth;
  }

  return Math.max(repeat(node.left, depth + 1), repeat(node.right, depth + 1));
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) {
    return 0;
  }

  return repeat(root, 0);
};
// @lc code=end

