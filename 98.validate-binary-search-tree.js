/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */
var isValidBST = function(root) {
  let min = (-2)**31 - 1
  let max = 2**31
  return validate(root, min, max);
};

var validate = (node, min, max) => {
  if (node === null) {
    return true;
  }
  
  if (node.val <= min || node.val >= max) {
    return false;
  } 

  return validate(node.left, min, node.val) && validate(node.right, node.val, max);
};
// @lc code=end

