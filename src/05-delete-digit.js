/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let res = String(n);
  const min = res.split('').sort();
  res = +(res.slice(0, res.indexOf(min[0]) + res.slice(res.indexOf(min[0] + 1))));
  return res;
}

module.exports = deleteDigit;
