/*
 * @lc app=leetcode id=98 lang=cpp
 *
 * [98] Validate Binary Search Tree
 */
#include <iostream>
// Definition for a binary tree node.
struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode() : val(0), left(nullptr), right(nullptr) {}
  TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
  TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};
// @lc code=start
class Solution {
 public:
  bool isValidBST(TreeNode *root) {
    return validate(root, NULL, NULL);
  }

  bool validate(TreeNode *node, int min, int max) {
    if (node == nullptr) {
      return true;
    }

    if (node->left) {
      if (node->val <= node->left->val) {
        return false;
      }
      if (min) {
        if (node->left->val <= min) {
          return false;
        }
      }
    }

    if (node->right) {
      if (node->val >= node->right->val) {
        return false;
      }
      if (max) {
        if (node->right->val >= max) {
          return false;
        }
      }
    }

    return validate(node->left, min, node->val) & validate(node->right, node->val, max);
  }
};
// @lc code=end
