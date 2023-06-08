const MATCHES = {
  "(":")",
  "{":"}",
  "[":"]",
};

var isValid = function (s) {
  let n = s.length,
    stack = [];

  if (n % 2 !== 0) return false;

  for (let i = 0; i < n; i++) {
    switch (s[i]) {
      case "(":
      case "{":
      case "[":
        stack.push(MATCHES[s[i]]);
        break;

      case ")":
      case "]":
      case "}":
        if (stack.pop() !== s[i]) {
          return false
        }
        break;
    }
  }
  return !stack.length;
};

console.warn(isValid("()")); // true
console.warn(isValid("()[]{}")); // true
console.warn(isValid("({[{({})}]})")); // true
console.warn(isValid("[()]{}")); // true
console.warn(isValid("([)]")); // false
console.warn(isValid("(]")); // false
console.warn(isValid("([}]")); // false
console.warn(isValid("(")); // false
console.warn(isValid("((")); // false

