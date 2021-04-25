/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * * O(n) 해결
 * * Javascript의 .sort() 함수는 퀵 소트 알고리즘을 사용함, O(nlogn) 임
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const answer = [];

  let left = 0;
  let right = nums.length - 1;
  let pushCursor = nums.length - 1;

  while (left <= right) {
    // 두 포인터가 만나면 종료
    if (nums[left]**2 > nums[right]**2) {
      answer[pushCursor] = nums[left]**2;
      left++;
    } else {
      answer[pushCursor] = nums[right]**2;
      right--;
    }
    pushCursor--;
  }

  return answer;
};
// @lc code=end

