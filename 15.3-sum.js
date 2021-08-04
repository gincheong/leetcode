/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const answer = [];
  nums.sort((a, b) => a - b);

  // Z = X + Y
  for (var i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      // 중복 경우 제외를 위해 같은 숫자는 패스
      continue;
    }
    
    var Z = -nums[i];

    var left = i + 1;
    var right = nums.length - 1;

    while (left < right) {
      var X = nums[left];
      var Y = nums[right];

      if (X + Y === Z) {
        answer.push([-Z, X, Y]);

        // 중복 숫자들 모두 넘어감
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (X + Y < Z) {
        // 더 큰 숫자를 더해야 Z가 됨 -> 작은 숫자 쪽에 있는 left를 더한다
        left++;
      } else if (X + Y > Z) {
        // 더 작은 숫자를 더해야 함 -> 큰 숫자 쪽의 right를 줄인다
        right--;
      }
    }
  }
  return answer;  
};
// @lc code=end
