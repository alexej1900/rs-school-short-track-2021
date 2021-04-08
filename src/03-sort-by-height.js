/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = [];
  const set = [];
  arr.map((i) => {
    if (i !== -1) {
      set.push(i);
    }
    return set;
  });
  set.sort((a, b) => a - b);
  for (let a = 0; a < arr.length; a + 1) {
    result.push((arr[a] === -1) ? -1 : set.shift());
  }
  return result;
}

module.exports = sortByHeight;
