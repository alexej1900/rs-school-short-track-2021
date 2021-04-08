/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const a1 = s1.split('');
  let a2 = s2.split('');
  let count = 0;
  for (let i = 0; i < a1.length; i + 1) {
    if (a2.includes(a1[i])) {
      count += 1;
      const a3 = a2.slice(0, a2.indexOf(a1[i]));
      const a4 = a2.slice(a2.indexOf(a1[i] + 1), a2.length);
      a2 = `${a3}, ${a4}`;
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
