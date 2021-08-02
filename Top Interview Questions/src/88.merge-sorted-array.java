/*
 * @lc app=leetcode id=88 lang=java
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
class Solution {
  public void merge(int[] nums1, int m, int[] nums2, int n) {
    if (m == 0) {
      System.arraycopy(nums2, 0, nums1, 0, n);
    }
    
    int cursor = nums1.length - 1;
    m--; n--;
    while (m >= 0 && n >= 0) {
      if (nums1[m] > nums2[n]) {
        nums1[cursor] = nums1[m--];
      } else {
        nums1[cursor] = nums2[n--];
      }
      cursor--;
    }

    if (n >= 0) {
      System.arraycopy(nums2, 0, nums1, 0, n + 1);
    }
  }
}
