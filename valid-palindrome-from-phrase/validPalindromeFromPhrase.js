const isPalindrome = (s) => {
  let alphanumeric = [];
  let flatten = s.toLowerCase();
  flatten = flatten.split("");
  for (let i = 0; i < flatten.length; i++) {
    if (/([a-z]|\d|-\d)/g.test(flatten[i])) {
      alphanumeric.push(flatten[i]);
    }
  };

  let string = [...alphanumeric];
  string = string.join("");
  let checkPalindrome = alphanumeric.reverse().join("");

  if (string === checkPalindrome) {
    return true;
  } else {
    return false;
  };
};

module.exports = { isPalindrome };

//flatten the string into lowercase
//remove everything but numbers & letters - regex test
//save the flattened alphanumeric string - reverse & compare

//https://leetcode.com/problems/valid-palindrome/
