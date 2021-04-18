/*
 * @lc app=leetcode id=217 lang=cpp
 *
 * [217] Contains Duplicate
 */
#include <algorithm>
#include <iostream>
#include <set>
#include <unordered_map>
#include <vector>
using namespace std;
// @lc code=start
class Solution {
 public:
  bool containsDuplicate(vector<int>& nums) {
    set<int> s(nums.begin(), nums.end());
    if (nums.size() > 1) {
      if (s.size() == nums.size()) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }

    // unordered_map<int, int> um;
    // vector<int>::iterator iter;
    // for (iter = nums.begin(); iter != nums.end(); iter++) {
    //   if (um.find(*iter) == um.end()) {
    //     // *iter not found
    //     um.insert({*iter, 1});
    //   } else {
    //     // found
    //     return true;
    //   }
    // }
    // return false;
  }
};
// @lc code=end

/*
일반 map을 사용해도 되는데, map은 Red-Black Tree를 이용하여 값을 저장하기
때문에, 기본적으로 탐색이 O(logn)시간이 걸린다고 함

반면에 unordered_map(hash_map)은 해시 함수 한 번만 통과하면 되기 때문에, 탐색이
O(1)시간 걸린다. 대신 hash-value을 담는 bucket의 크기가 한정되어 있어서, 해시
충돌이 발생하는 경우가 있어 탐색에 최악으로 O(n)시간이 걸릴 수도 있다. 다만
보통은 bucket의 크기가 어느정도 이상이며 그것을 회피할 chanining(데이터를
이어붙임), open addressing(가까운 빈 공간에 추가) 등이 있어서 어지간하면
O(1)시간이 걸린다. 하지만 위 두 방법도 단점은 있어서, 최악으로 O(n)시간 걸리는
건 마찬가지

추가로 hash_map은 표준이 아니라서, unordered_map 을 쓰는 게 낫다.

마지막으로 중요한 점은 이 문제는 map을 안 써도 된다는 거
*/