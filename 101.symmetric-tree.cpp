/*
 * @lc app=leetcode id=101 lang=cpp
 *
 * [101] Symmetric Tree
 */
#include <iostream>
#include <vector>
using namespace std;
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
  bool isSymmetric(TreeNode* root) {
    if (root == nullptr) {
      return true;
    }
    vector<TreeNode*> stack = {root->left, root->right};
    
    while (stack.size()) {
      TreeNode* node1 = stack.back();
      stack.pop_back();
      TreeNode* node2 = stack.back();
      stack.pop_back();

      if (node1 == nullptr && node2 == nullptr) {
        continue;
      } else if (node1 == nullptr || node2 == nullptr) {
        return false;
      } else if (node1->val == node2->val) {
        stack.push_back(node1->left);
        stack.push_back(node2->right);
        
        stack.push_back(node1->right);
        stack.push_back(node2->left);
      } else {
        return false;
      }
    }
    return true;
  }
};
// @lc code=end

