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
  let rez = 0;
  const arrS2 = s2.split('');
  s1.split('').forEach((item) => {
    if (arrS2.indexOf(item) !== -1) {
      arrS2.splice(arrS2.indexOf(item), 1);
      rez++;
    }
  });
  return rez;
}

module.exports = getCommonCharacterCount;
