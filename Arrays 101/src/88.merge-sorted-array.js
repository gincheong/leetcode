/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  
  m--;
  n--;
  
  while (n >= 0 && m >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[m + n + 1] = nums1[m--];
    } else {
      nums1[m + n + 1] = nums2[n--];
    }
  }

  for (var i = 0; i <= n; i++) {
    nums1[i] = nums2[i];
  }

};
// @lc code=end

