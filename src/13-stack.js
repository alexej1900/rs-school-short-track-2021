/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack_arr = [];
  }

  push(element) {
    this.stack_arr.push(element);
  }

  pop() {
    return this.stack_arr.pop();
  }

  peek() {
    return this.stack_arr[this.stack_arr.length - 1];
  }
}

module.exports = Stack;
