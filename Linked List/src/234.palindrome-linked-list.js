/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (head.next === null) {
    return true;
  } else if (head.next.next === null) {
    if (head.val === head.next.val) {
      return true;
    }
    return false;
  }

  let slow = head;
  let fast = head;
  const slowHead = new ListNode(); // 노드를 역순으로 저장할 새 linked list
  let slowNode = slowHead;
  let temp;
  // O(1) space

  // O(n) time
  while (fast.next?.next ?? null !== null) {
    // fast는 두 칸씩 이동, slow는 한 칸씩 이동

    temp = slowNode.next;
    slowNode.next = slow;

    slow = slow.next;
    fast = fast.next.next;

    slowNode.next.next = temp;
  }
  
  // 노드가 짝수개면, slow를 한칸 더 이동시켜야 가운데로 나뉨
  if (fast.next !== null) {
    temp = slowNode.next;
    slowNode.next = slow;

    slow = slow.next;
    
    slowNode.next.next = temp;
  } else {
    slow = slow.next;
  }

  slowNode = slowHead.next;
  while (slow !== null) {
    if (slow.val !== slowNode.val) {
      return false;
    }
    slowNode = slowNode.next;
    slow = slow.next;
  }

  return true;
};
// @lc code=end

