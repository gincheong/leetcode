/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
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
 * @param {array} arr
 * @return {[array, number, array]}
 */
const sliceArray = (arr) => {
  const centerIdx = Math.floor(arr.length / 2);
  
  const left = arr.slice(0, centerIdx);
  const center = arr[centerIdx];
  const right = arr.slice(centerIdx + 1, arr.length);

  return [left, center, right];
};

/**
 * @param {number[]} nums
 */
const makeBST = (nums) => {
  if (nums.length) {
    const [left, center, right] = sliceArray(nums);
    const node = new TreeNode(center, makeBST(left), makeBST(right));

    return node;
  }
};

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums) => {
  return makeBST(nums);
};
// @lc code=end

