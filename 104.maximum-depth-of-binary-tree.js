/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
// @lc code=start
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  return search(root, 0);
};

var search = (node, depth) => {
  if (node === null) {
    return depth;
  }

  depth++;
  return Math.max(search(node.left, depth), search(node.right, depth));
};

// @lc code=end

