/*
 * @lc app=leetcode id=104 lang=cpp
 *
 * [104] Maximum Depth of Binary Tree
 */
#include <algorithm>
using namespace std;
// Definition for a binary tree node.
struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode() : val(0), left(nullptr), right(nullptr) {}
  TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
  TreeNode(int x, TreeNode *left, TreeNode *right)
      : val(x), left(left), right(right) {}
};
// @lc code=start
class Solution {
 public:
  int maxDepth(TreeNode *root) {
    if (root == nullptr) {
      return 0;
    }

    int depth = 1;
    return repeat(root, depth);
  }

  int repeat(TreeNode *node, int depth) {
    if (node == nullptr) {
      return depth;
    }

    if (node->left || node->right) {
      depth++;
    }

    return max(repeat(node->left, depth), repeat(node->right, depth));
  }
};
// @lc code=end
