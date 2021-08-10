/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let colZero = false; // 맨 끝 column이 0인지
  let rowZero = false; // 맨 끝 row가 0인지

  // 0이 발견되면 외곽으로 밀어낼 것이기에, 외곽에 맨 처음부터 0이 있는지 확인한다.
  for (var row = 0; row < m; row++) {
    if (matrix[row][n - 1] == 0) {
      colZero = true; // 오른쪽 끝 세로 줄이 모두 0이 될 예정임
      break;
    }
  }

  for (var col = 0; col < n; col++) {
    if (matrix[m - 1][col] == 0) {
      rowZero = true; // 맨 아래 가로 줄이 모두 0이 될 예정임
      break;
    }
  }

  // 외곽을 제외하고, 0이 발견되면 끝으로 보내자
  for (var row = 0; row < m - 1; row++) {
    for (var col = 0; col < n - 1; col++) {

      // 0이 발견되면
      if (matrix[row][col] == 0) {
        // 각 외각으로 0을 보냄
        matrix[row][n - 1] = 0;
        matrix[m - 1][col] = 0;
      }
    }
  }

  // 각 row의 끝부분을 보면서, 0이 발견되면 해당 row를 0으로 채우기
  for (var row = 0; row < m - 1; row++) {

    // 0이 발견되면
    if (matrix[row][n - 1] == 0) {
      // 해당 row를 0으로 채우기
      for (var col = 0; col < n - 1; col++) {
        matrix[row][col] = 0;
      }
    }
  }

  // 각 column의 끝부분을 보면서, 0이 발견되면 해당 column을 0으로 채우기
  for (var col = 0; col < n - 1; col++) {

    // 0이 발견되면
    if (matrix[m - 1][col] == 0) {
      // 해당 column을 0으로 만들기
      for (var row = 0; row < m - 1; row++) {
        matrix[row][col] = 0;
      }
    }
  }

  // 외곽선이 0여야 하는지 확인하고, 처리
  if (colZero) {
    for (var row = 0; row < m; row++) {
      matrix[row][n - 1] = 0;
    }
  }

  if (rowZero) {
    for (var col = 0; col < n; col++) {
      matrix[m - 1][col] = 0;
    }
  }

};
// @lc code=end

setZeroes([[1,1,1],[1,0,1],[1,1,1]]);
console.log("-------");
setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]);