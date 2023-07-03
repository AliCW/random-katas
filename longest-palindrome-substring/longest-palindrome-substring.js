const longestPalindromeSubstring = function (s) {
    let stringArr = s.split("");
    let palString = [];
    let checkPal = [];
    let confirmed = [];
    let count = 0;
    let lastLength = 0
  
    if(s.split('').reverse().join('') === s) {
      return s;
    }
  
    if (s.length === 0) return "";
    if (s.length === 1) return s;
    if (s.length === 2) {
      if (s.slice(0, 1) === s.slice(1, 2)) {
        return s;
      } else {
        return s.slice(0, 1);
      }
    }
  
    if (count === s.length) return s;

  if(s.length > 10) {
      for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length - i; j++) {
            checkPal = stringArr.slice(0, j);
            palString = checkPal.slice(0, s.length);
            if(lastLength === s.length) {
                break;
            }
  
            lastLength = checkPal.length;
          if (palString.reverse().join("") === checkPal.join("")) {
            if (palString.length > 1) {
              confirmed.push(palString);
            }
          }
        };
        stringArr.shift();
      };
  } else {
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length; j++) {
            checkPal = stringArr.slice(0, j);
            palString = checkPal.slice(0, s.length);
            if(lastLength === s.length) {
                break;
            }
  
            lastLength = checkPal.length;
          if (palString.reverse().join("") === checkPal.join("")) {
            if (palString.length > 1) {
              confirmed.push(palString);
            }
          }
        };
        stringArr.shift();
      };
  } 
    let longestPalindrome = "";

    if(confirmed.length === 0) {
        return s.slice(0, 1)
    }

    confirmed.forEach((element, index) => {
      if (element.length > longestPalindrome.length) {
        longestPalindrome = confirmed[index];
      };
    });
    return longestPalindrome.join("");
  };

module.exports = { longestPalindromeSubstring };
