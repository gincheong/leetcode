/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}
// @lc code=start
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head === null) {
    return false;
  }

  var slow = head;
  var fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};
// @lc code=end

