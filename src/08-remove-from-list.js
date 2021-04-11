/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
  */
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

function removeKFromList(l, k) {
  let head = l;
  while (head.value === k) {
    head = head.next;
  }
  let currNode = head;
  let nextNode = currNode.next;
  while (nextNode !== null) {
    if (nextNode.value === k) {
      currNode.next = nextNode.next;
      if (currNode.next == null) {
        break;
      }
    }
    currNode = currNode.next;
    nextNode = currNode.next;
  }
  return head;
}

module.exports = removeKFromList;
