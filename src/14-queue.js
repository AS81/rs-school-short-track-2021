// const ListNode = require('../extensions/list-node');
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

const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.queue = {};
    this.head = 0;
    this.tail = 0;
    ListNode();
  }

  get size() {
    return this.tail;
  }

  enqueue(element) {
    this.queue[this.tail++] = element;
  }

  dequeue() {
    let elemFirst;

    if (this.tail === this.head) {
      return undefined;
    }

    if (this.tail !== this.head) {
      elemFirst = this.queue[this.head];
      delete this.queue[this.head++];
      this.tail--;
      return elemFirst;
    }
    return elemFirst;
  }
}

module.exports = Queue;
