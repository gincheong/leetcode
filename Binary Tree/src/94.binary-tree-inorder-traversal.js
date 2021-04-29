/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
 */

//Definition for a binary tree node.
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
 * @param {number[]} stack
 * @return null
 */
const repeat = (node, stack) => {
  if (node.left !== null) {
    repeat(node.left, stack);
  }
  stack.push(node.val);

  if (node.right !== null) {
    repeat(node.right, stack);
  }
};
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (root === null) {
    return [];
  }

  const stack = [];

  // Iteration
  // const answer = [];
  // let node = root;
  // while (stack.length > 0 || node !== null) {
  //   while (node !== null) {
  //     stack.push(node);
  //     node = node.left;
  //   }

  //   node = stack.pop();
  //   answer.push(node.val);
  //   node = node.right;
  // }
  // return answer;

  // Recursion
  repeat(root, stack);
  return stack;
};
// @lc code=end

