/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  for (let i = 0; i < domains.length; i += 1) {
    let str = '';
    let strLong = '';
    const domItem = domains[i].split('');
    for (let j = domItem.length - 1; j >= 0; j -= 1) {
      if (j === 0) {
        strLong = `${strLong}.${domItem[j]}${str}`;
        str = '';
        if (!Object.prototype.hasOwnProperty.call(res, strLong)) {
          res[strLong] = 1;
        } else {
          res[strLong] += 1;
        }
      }
      if (domItem[j] !== '.') {
        str = `${domItem[j]}${str}`;
      } else {
        strLong = `${strLong}${domItem[j]}${str}`;
        str = '';
        if (!Object.prototype.hasOwnProperty.call(res, strLong)) {
          res[strLong] = 1;
        } else {
          res[strLong] += 1;
        }
      }
    }
  }
  return res;
}

module.exports = getDNSStats;
