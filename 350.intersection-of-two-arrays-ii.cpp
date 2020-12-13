/*
 * @lc app=leetcode id=350 lang=cpp
 *
 * [350] Intersection of Two Arrays II
 */
#include <algorithm>
#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;
// @lc code=start
class Solution {
 public:
  vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
    unordered_map<int, int> um;

    for (int i = 0; i < nums1.size(); i++) {
      if (um.find(nums1[i]) == um.end()) {
        um.insert({nums1[i], 1});
      } else {
        um[nums1[i]]++;
      }
    }

    vector<int> answer;
    for (int i = 0; i < nums2.size(); i++) {
      if (um[nums2[i]] > 0) {
        um[nums2[i]]--;
        answer.push_back(nums2[i]);
      }
    }
    return answer;

    // vector<int> result;
    // sort(nums1.begin(), nums1.end());
    // sort(nums2.begin(), nums2.end());

    // int idx1 = 0;
    // int idx2 = 0;

    // while (idx1 < nums1.size() && idx2 < nums2.size()) {
    //   if (nums1[idx1] == nums2[idx2]) {
    //     result.push_back(nums1[idx1]);
    //     idx1++;
    //     idx2++;
    //   } else if (nums1[idx1] < nums2[idx2]) {
    //     idx1++;
    //   } else {
    //     idx2++;
    //   }
    // }

    // return result;
  }
};
// @lc code=end
