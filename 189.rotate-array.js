/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k %= nums.length;

  var rotateCount = 0;
  var startIdx = 0;
  while (rotateCount < nums.length) {
    var currentIdx = startIdx;
    var prev = nums[currentIdx];
    do {
      currentIdx = (currentIdx + k ) % nums.length;
      
      var temp = nums[currentIdx];
      nums[currentIdx] = prev;
      prev = temp;
      rotateCount++;

    } while (currentIdx !== startIdx);

    startIdx++;
  }

  return nums;
};
// @lc code=end

