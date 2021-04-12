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
  const domainsObj = {};
  let elemArray;
  let elemArrayDot;
  domains.forEach((elem) => {
    elemArray = elem.split('.').reverse();

    for (let i = 0; i < elemArray.length; i++) {
      if (i === 0) {
        elemArrayDot = `.${elemArray[i]}`;
      } else {
        elemArrayDot = `${elemArrayDot}.${elemArray[i]}`;
      }

      if (elemArrayDot in domainsObj) {
        domainsObj[elemArrayDot] += 1;
      } else domainsObj[elemArrayDot] = 1;
    }
  });
  return domainsObj;
}

module.exports = getDNSStats;
