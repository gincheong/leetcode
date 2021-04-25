/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @param {TreeNode} node
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
const validate = (node, left, right) => {
  if (node === null) {
    return true;
  }

  if (node.val > left && node.val < right) {
    return (validate(node.left, left, node.val)
      && validate(node.right, node.val, right))
  } else {
    return false;
  }
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = (root) => {
  return validate(root, Math.pow(-2, 31) - 1, Math.pow(2, 31));
};

// @lc code=end

