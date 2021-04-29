/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var buildTree = function(inorder, postorder) {    
  let hash = {};
  for (let i=0;i<inorder.length;i++) hash[inorder[i]] = i; 
  
  let recur = function(start, end) {
      if (start > end) return null;
      let val = postorder.pop();
      let root = new TreeNode(val);
      root.right = recur(hash[val] + 1, end);
      root.left = recur(start, hash[val] - 1);
      return root;
  }
  
  return recur(0, inorder.length - 1);  
};
// 내가 푼 거 아님 머리가 안 돌아가서 그냥 솔루션 대충 박아넣음
// @lc code=end

