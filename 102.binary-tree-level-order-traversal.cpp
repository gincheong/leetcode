/*
 * @lc app=leetcode id=102 lang=cpp
 *
 * [102] Binary Tree Level Order Traversal
 */
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
  vector<vector<int>> levelOrder(TreeNode* root) {
    vector<vector<int>> answer;
    if (root == nullptr) {
      return answer;
    }

    vector<TreeNode*> stack = {root};

    while (stack.size()) {
      int current_level_size = stack.size();
      vector<int> current_level(current_level_size);
      
      for (int i = 0; i < current_level_size; i++) {
        TreeNode* node = stack.back();
        stack.pop_back();
        current_level[i] = node->val;
        
        if (node->left) {
          stack.insert(stack.begin(), node->left);
        }
        if (node->right){
          stack.insert(stack.begin(), node->right);
        }
      }
      answer.push_back(current_level);
    }

    return answer;
  }
};
// @lc code=end
