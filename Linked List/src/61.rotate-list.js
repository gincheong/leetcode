/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  let listLength = 0;
  let cursor = head;
  while (cursor !== null) {
    listLength++;
    cursor = cursor.next;
  }

  k %= listLength;
  if (k === 0) {
    return head;
  }

  const newHead = new ListNode(null, head);

  cursor = newHead;
  let count = listLength - k;
  while (count-- > 0) {
    cursor = cursor.next;
  }
  const tempHead = cursor.next;
  cursor.next = null;

  const tempNext = newHead.next;
  newHead.next = tempHead;

  cursor = newHead;
  while (cursor.next !== null) {
    cursor = cursor.next;
  }
  cursor.next = tempNext;

  return newHead.next;
};
// @lc code=end

