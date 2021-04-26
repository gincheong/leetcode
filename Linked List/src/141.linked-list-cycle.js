/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head === null || head.next === null) {
    return false;
  }

  // O(1) Space
  let slow = head;
  let fast = head;

  do {
    if (fast.next === null || fast.next.next === null) {
      return false;
    }

    slow = slow.next;
    fast = fast.next.next;
  } while (slow !== fast);

  return true;

};
// @lc code=end

