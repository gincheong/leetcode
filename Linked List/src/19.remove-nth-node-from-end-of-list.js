/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */


// Definition for singly-linked list.
class ListNode {
  constructor(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

// @lc code=start
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const newHead = new ListNode(0, head);

  let slow = newHead;
  let fast = newHead;
  
  while (n-- > 0) {
    fast = fast.next;
  }
  
  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  
  slow.next = slow.next?.next ?? null;

  return newHead.next;
};
// @lc code=end

