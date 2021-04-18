/*
 * @lc app=leetcode id=108 lang=cpp
 *
 * [108] Convert Sorted Array to Binary Search Tree
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
  TreeNode* sortedArrayToBST(vector<int>& nums) {
    TreeNode* root = nullptr;
    return repeat(nums);
  }

  TreeNode* repeat(vector<int>& nums) {
    if (!nums.size()) {
      return nullptr;
    }
    int half = nums.size() / 2;

    TreeNode* node = new TreeNode(nums[half]);

    vector<int> left_nums(nums.begin(), nums.begin() + half);
    vector<int> right_nums(nums.begin() + half + 1, nums.end());

    node->left = repeat(left_nums);
    node->right = repeat(right_nums);

    return node;
  }
};
// @lc code=end

