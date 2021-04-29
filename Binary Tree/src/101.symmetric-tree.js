/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
 * @param {TreeNode} left
 * @param {TreeNode} right
 * @return {boolean}
 */
const repeat = (left, right) => {
  if (left && right) {
    if (left.val !== right.val) {
      return false;
    } else {
      return repeat(left.right, right.left) && repeat(left.left, right.right);
    }
  } else if (!left && !right) {
    return true;
  } else {
    return false;
  }
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root === null) {
    return false;
  }
   
  return repeat(root.left, root.right);
};
// @lc code=end

