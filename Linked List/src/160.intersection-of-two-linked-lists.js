/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  
  let nodeA = headA;
  let nodeB = headB;

  while (nodeA !== null && nodeB !== null) {
    nodeA = nodeA.next;
    nodeB = nodeB.next;
  }
  
  let long;
  let short;
  let distance = 0;
  
  if (nodeA == null) {
    while (nodeB !== null) {
      nodeB = nodeB.next;
      distance++;
    }
    long = headB;
    short = headA;
  } else {
    while (nodeA !== null) {
      nodeA = nodeA.next;
      distance++;
    }
    long = headA;
    short = headB;
  }

  for (var i = 0; i < distance; i++) {
    long = long.next;
  }

  while (long !== null && short !== null) {
    if (long === short) {
      return long;
    }

    long = long.next;
    short = short.next;
  }

  return null;
};
// @lc code=end

