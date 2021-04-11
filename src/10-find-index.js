/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
// function findIndex(/* array, value */) {
//   throw new Error('Not implemented');
// }

function findIndex(array, value) {
  const start = 0;
  const end = array.length - 1;
  let pos;
  function findIndexStartEnd(arr, val, st, e) {
    pos = Math.round((e - st) / 2) + st;
    if (array[pos] === val) {
      return pos;
    }
    if (arr[pos] > val) {
      findIndexStartEnd(arr, val, 0, pos - 1);
    } else {
      findIndexStartEnd(arr, val, pos, e);
    }
    return pos;
  }
  findIndexStartEnd(array, value, start, end);
  return pos;
}

module.exports = findIndex;
