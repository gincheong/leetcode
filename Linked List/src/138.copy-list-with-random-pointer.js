/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 */

// Definition for a Node.
class Node {
  constructor(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
}

// @lc code=start
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  const newHead = new Node(null, null, null);

  let cursor = head;
  let newNode = newHead;
  while (cursor !== null) {
    newNode.next = new ListNode(cursor.val, null, null);
    // 원본 연결리스트의 val, next를 복사함

    newNode = newNode.next;
    cursor = cursor.next;
  }

  let index;
  let tempCursor;
  let randomNode;
  cursor = head;
  newNode = newHead.next;
  while (cursor !== null) {
    randomNode = cursor.random;

    if (randomNode === null) {
      newNode.random = null;
    } else {
      // random이 null이 아닌 경우에

      index = 0;
      tempCursor = head;
      while (tempCursor !== randomNode) {
        tempCursor = tempCursor.next;
        index++;
        // 원본 연결리스트에서, 해당 random이 몇 번째 노드인지 확인하고
      }

      tempCursor = newHead.next;
      while (index-- > 0) {
        tempCursor = tempCursor.next;
        // 복사본 연결리스트에서 위에서 구한 index로 노드의 찾아낸다
      }
      newNode.random = tempCursor;
    }

    newNode = newNode.next;
    cursor = cursor.next;
  }

  return newHead.next;
};
// @lc code=end

