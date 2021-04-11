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
function findIndex(array, value) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    const middle = parseInt(((high + low) / 2), 10);
    const res = array[middle];
    if (res === value) {
      return middle;
    }
    if (res > value) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return null;
}

module.exports = findIndex;
