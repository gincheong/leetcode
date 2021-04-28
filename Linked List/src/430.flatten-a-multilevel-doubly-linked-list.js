/*
 * @lc app=leetcode id=430 lang=javascript
 *
 * [430] Flatten a Multilevel Doubly Linked List
 */

// Definition for a Node.
class Node {
  constructor(val, prev, next, child) {
    this.val = val;
    this.prev = prev;
    this.next = next;
    this.child = child;   
  }
}

// @lc code=start
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  if (head === null) {
    return null;
  }

  let current = head;
  let tempChild;
  let tempNext;
  while (current != null) {
    
    // child가 없으면, 바로 next로 넘어감
    if (current.child === null) {
      current = current.next;
      continue;
    }
    // child가 발견되면, child의 끝을 current.next와 연결함
    
    tempChild = current.child;
    while (tempChild.next !== null) {
      tempChild = tempChild.next;
    }
    tempChild.next = current.next;

    if (current.next !== null) {
      current.next.prev = tempChild;
    }

    current.child.prev = current;
    
    current.next = current.child;
    current.child = null;
  }

  return head;
};
// @lc code=end

