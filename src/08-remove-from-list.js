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
  let list = l;
  let res = l;
  while (res) {
    if (list.value !== k) {
      res.value = list.value;
      res = res.next;
      list = list.next;
    } else if (list.value === k) {
      list = list.next;
      res.value = list.next.value;
    } else {
      res.next = null;
    }
  }
}
//   const head = l;
//   // let prev = null;
//   const list = l;
//   // console.log('head', head.next);
//   // console.log('list', list);
//   while (list) {
//     if (list.value === k) {
//       head.value = list.next.value;
//       list.value = list.next.value;
//     } else if (list.value !== k) {
//       head.value = list.value;
//       list.value = list.next.value;
//       // list = list.next;
//       // console.log('list', list);
//     }
//     // else {
//     //   head.next = list.next;
//     //   list.value = list.next.next;
//     // }
//   }
//   // return list;
// }

// console.log(removeKFromList([3, 1, 2, 3, 4, 5], 3));
module.exports = removeKFromList;
