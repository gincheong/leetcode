/*
 * @lc app=leetcode id=36 lang=cpp
 *
 * [36] Valid Sudoku
 */
#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;
// @lc code=start
class Solution {
 public:
  bool isValidSudoku(vector<vector<char>>& board) {
    vector<unordered_map<char, int>> row(9);
    vector<unordered_map<char, int>> col(9);
    vector<unordered_map<char, int>> box(9);

    for (int rowIdx = 0; rowIdx < 9; rowIdx++) {
      for (int colIdx = 0; colIdx < 9; colIdx++) {
        int boxIdx = (rowIdx / 3) * 3 + (colIdx / 3);

        char current = board[rowIdx][colIdx];
        if (current == '.') {
          continue;
        }

        // Row
        if (row[rowIdx].find(current) == row[rowIdx].end()) {
          // not found
          row[rowIdx].insert({current, 1});
        } else {
          return false;
        }

        // Col
        if (col[colIdx].find(current) == col[colIdx].end()) {
          col[colIdx].insert({current, 1});
        } else {
          return false;
        }

        // Box
        if (box[boxIdx].find(current) == box[boxIdx].end()) {
          box[boxIdx].insert({current, 1});
        } else {
          return false;
        }
      }
    }

    return true;
  }
};
// @lc code=end
