const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

/* function ListNode(x) {
  this.value = x;
  this.next = null;
} */

class Queue {
  constructor() {
    this.queueArr = [];
  }

  get size() {
    return this.queueArr.length;
  }

  enqueue(element) {
    this.queueArr.push(new ListNode(element));
    if (this.size > 1) {
      this.queueArr[this.size - 2].next = this.queueArr[this.size - 1].value;
    }
  }

  dequeue() {
    /* if (this.size > 1) {
      this.queueArr[this.size - 2].next = null;
    } */
    return this.queueArr.shift().value;
  }
}
/* const queue = new Queue();

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue());
console.log(queue.dequeue()); */
module.exports = Queue;
