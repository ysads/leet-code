/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  strs.sort((s1, s2) => s1.length - s2.length);
  const first = strs[0];
  const last = strs[strs.length - 1];

  for (var i = 0; i < strs[0].length; i++) {
    if (first[i] !== last[i]) {
      return first.substring(0, i);
    }
  }
  return "";
};

var longestCommonPrefix2 = function (strs) {
  if (!strs.length) return "";

  var prefix = "",
    i = 0;

  strs.sort((s1, s2) => s1.length - s2.length);

  while (i < strs[0].length) {
    if (strs.reduce((acc, s) => acc.add(s.charAt(i)), new Set()).size !== 1) {
      break;
    }
    prefix = prefix.concat(strs[0].charAt(i));
    i++;
  }
  return prefix;
};

console.warn(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.warn(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.warn(longestCommonPrefix([])); // ""
console.warn(longestCommonPrefix([""])); // ""
console.warn(longestCommonPrefix(["a"])); // "a"
console.warn(longestCommonPrefix(["a", "ab"])); // "a"
