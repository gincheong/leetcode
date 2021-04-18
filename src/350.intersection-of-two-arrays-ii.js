/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  var answer = new Array();
  var hash = {};

  nums1.forEach(val => {
    if (hash[val] === undefined) {
      hash[val] = 1;
    } else {
      hash[val]++;
    }
  });

  nums2.forEach(val => {
    if (hash[val] === undefined || hash[val] <= 0) {
      //
    } else {
      hash[val]--;
      answer.push(val);
    }
  });

  return answer;
};
// @lc code=end
