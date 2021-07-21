import java.util.ArrayList;
import java.util.HashMap;

/*
 * @lc app=leetcode id=350 lang=java
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
class Solution {
  public int[] intersect(int[] nums1, int[] nums2) {
    HashMap<Integer, Integer> usedCount = new HashMap<>();
    
    int[] shorter, longer;
    if (nums1.length < nums2.length) {
      shorter = nums1;
      longer = nums2;
    } else {
      shorter = nums2;
      longer = nums1;
    }

    for (int each : shorter) {
      if (usedCount.containsKey(each)) {
        usedCount.put(each, usedCount.get(each) + 1);
      } else {
        usedCount.put(each, 1);
      }
    }
    
    ArrayList<Integer> answerList = new ArrayList<>();
    for (int each : longer) {
      if (usedCount.containsKey(each)) {
        if (usedCount.get(each) > 0) {
          // 카운트 -1
          usedCount.put(each, usedCount.get(each) - 1);
          answerList.add(each);
        }
      } 
    }

    int[] answer = new int[answerList.size()];
    for (int i = 0; i < answer.length; i++) {
      answer[i] = answerList.get(i);
    }
    
    return answer;
  }
}
// @lc code=end

