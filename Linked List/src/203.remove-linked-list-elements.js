/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
 */


// Definition for singly-linked list.
class ListNode {
  consturctor(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

// @lc code=start
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (head === null) {
    return null;
  }

  const tempHead = new ListNode(-1, head);
  let current = tempHead;

  while (current !== null) {
    if (current.next?.val === val) {
      current.next = current.next?.next ?? null;
    } else {
      current = current.next;
    }
  }

  return tempHead.next;
};
// @lc code=end

