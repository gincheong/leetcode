/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 */

// Definition for a binary tree node.
class TreeNode {
  constructor(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}
// @lc code=start
/**
 * @param {array} stack
 * @return {array}
 */
const search = (node) => {
  if (!node) {
    return stack;
  }

  const stack = [node.left, node.right];
  let node1;
  let node2;

  while (stack.length > 0) {
    node1 = stack.pop();
    node2 = stack.pop();

    if (node1 === null && node2 === null) {
      // 노드의 끝까지 탐색한 경우 (둘다 null)
      continue;
    }

    if (node1 === null || node2 === null) {
      // 위의 조건문을 통과하고, 여기서 true가 나오면 한 쪽만 null인것
      return false;
    }
    
    if (node1.val !== node2.val) {
      // 두 값이 다른 경우 
      return false;
    }

    stack.push(node1.left);
    stack.push(node2.right);
    stack.push(node1.right);
    stack.push(node2.left);
    // 대칭을 찾는 것이니 좌-우 적절히 순서대로 넣어서
    // 나중에 pop()으로 비교할 수 있게 함
  }

  // 반복문을 멀쩡히 나오면 대칭인 것
  return true;
};
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root) => {
  return search(root);

};
// @lc code=end
