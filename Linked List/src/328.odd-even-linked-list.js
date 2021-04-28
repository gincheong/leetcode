/*
 * @lc app=leetcode id=328 lang=javascript
 *
 * [328] Odd Even Linked List
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
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  const oddHead = new ListNode();
  const evenHead = new ListNode();

  let oddNode = oddHead;
  let evenNode = evenHead;

  let current = head;
  while (current !== null) {
    oddNode.next = current;
    evenNode.next = current.next;

    current = current.next?.next ?? null;
    
    oddNode = oddNode.next;
    evenNode = evenNode.next;
  }
  oddNode.next = evenHead.next;
  
  return oddHead.next;
};
// @lc code=end

