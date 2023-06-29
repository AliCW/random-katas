const palindromeNumber = function(x) {
    if(x >= 0 && x < 9) {
        return true;
    }
    if(x < 0) {
        return false;
    }
    else {
        let stringNumber = x.toString();
        let checkPalindrome = stringNumber.split('').reverse();
        if (stringNumber === checkPalindrome.join('')) {
            return true;
        } else {
            return false;
        };
    };
};

module.exports = { palindromeNumber }

//https://leetcode.com/problems/palindrome-number/