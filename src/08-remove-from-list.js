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
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  const listWithoutK = {};

  class CreateNextNode {
    constructor(val) {
      this.value = val;
      this.next = null;
    }
  }

  function listWithoutKAddNode(obj, listValue) {
    if (obj.next) {
      listWithoutKAddNode(obj.next, listValue);
    } else {
      obj.next = new CreateNextNode(listValue); // eslint-disable-line no-param-reassign
    }
  }

  function removeKFromListCheck(list, elem) {
    if (list.value !== elem) {
      if (listWithoutK.value) {
        listWithoutKAddNode(listWithoutK, list.value);
      } else {
        listWithoutK.value = list.value;
        listWithoutK.next = null;
      }
    }
    if (list.next) {
      removeKFromListCheck(list.next, elem);
    }
  }

  removeKFromListCheck(l, k);
  return listWithoutK;
}

module.exports = removeKFromList;
