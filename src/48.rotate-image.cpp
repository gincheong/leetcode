/*
 * @lc app=leetcode id=48 lang=cpp
 *
 * [48] Rotate Image
 */
#include <iostream>
#include <vector>
using namespace std;
// @lc code=start
class Solution {
 public:
  void rotate(vector<vector<int>>& matrix) {
    int repeat = matrix.size() / 2;

    int max = matrix.size() - 1;
    int min = 0;

    for (int min = 0; min < repeat; min++) {
      // 바깥줄부터 차례로 진행

      for (int i = 0; i < max - min; i++) {
        vector<pair<int, int>> pattern;
        pattern.push_back({min, min + i});
        pattern.push_back({min + i, max});
        pattern.push_back({max, max - i});
        pattern.push_back({max - i, min});

        int x = pattern.back().first;
        int y = pattern.back().second;
        int prev = matrix[x][y];

        for (int j = 0; j < pattern.size(); j++) {
          x = pattern[j].first;
          y = pattern[j].second;

          int temp = matrix[x][y];
          matrix[x][y] = prev;
          prev = temp;
        }
      }

      max--;
    }
  }
};
// @lc code=end
