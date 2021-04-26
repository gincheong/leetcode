/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 */

// Definition for singly-linked list.
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// @lc code=start
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (head === null || head.next === null) {
    return null;
  }

  let slow = head;
  let fast = head;

  do {
    if (fast.next === null || fast.next.next === null) {
      return null;
    }

    slow = slow.next;
    fast = fast.next.next;
  } while (slow !== fast);

  /**
   * cycle 시작 앞에 
   * 1. 0개 or 짝수 개 숫자가 있으면 ([1, 2, 3, 4], pos = 0)
   *    slow === fast 가 cycle의 끝부분에서 확인됨
   * 2. 홀수 개 숫자가 있으면 ([1, 2, 3, 4], pos = 1)
   *    slow === fast 가 cycle의 첫부분에서 확인됨
   */

  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  // 대충 이해는 되는데 왜 이렇게 어지럽지..
  return slow;
};
// @lc code=end

