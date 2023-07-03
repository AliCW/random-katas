const longestPalindromeSubstring = function(s) {
    let setCheck = new Set();
    let palString = '';
    let palArr = [];
    let confirmed = [];

    if(s.length === 0) return '';
    if(s.length === 1) return s;

    for(let i = 0; i < s.length; i++) { //find potential palindromes
        if(setCheck.has(s[i])) { //change this - auto pushing as soon as a duplicate is found
            palString += s[i];
            palArr.push(palString);
        } else {
            palString += s[i];
            setCheck.add(s[i]);
        }
    };

    let reverseCheck = '';
    let shaveString = '';
    let count = 1;

    for(let j = 0; j < palArr.length; j++) { //check paldindromes
        reverseCheck = palArr[j].split('').reverse().join('');
        if(palArr[j] === reverseCheck) {
            confirmed.push(palArr[j]);
        }
        
        else if(palArr[j] !== reverseCheck) { //slice until paldindrome is found
            let loop = palArr[j].split('').length;
            for(let k = 0; k < loop; k++) {
                shaveString = palArr[j].substring(count);
                count++;
                reverseCheck = shaveString.split('').reverse().join('');
                if(reverseCheck === shaveString) {
                    confirmed.push(shaveString);
                };
            };
        };
    };
    let longestPalindrome = confirmed[0];
    console.log(confirmed)
    confirmed.forEach((element, index) => {
        if(element.length > longestPalindrome.length) {
            longestPalindrome = confirmed[index];
        };
    });
    if(longestPalindrome === undefined) {
        let returnFirst = s.split('')
        return returnFirst[0]
    }
    return longestPalindrome;
};

module.exports = { longestPalindromeSubstring };



// var longestPalindrome = function(s) {
//     const n = s.length;
//     if (n === 0)
//         return "";
//     if (n === 1)
//         return s;

//     let minstart = 0, maxlen = 0;

//     let i = 0;
//     while (i < n) {
//         if (n - i < maxlen / 2)
//             break;

//         let l = i, r = i;

//         // Find the center of the palindrome
//         while (r < n - 1 && s[r] === s[r + 1])
//             r++;

//         // Update the next starting point
//         i = r + 1;

//         // Expand around the center to find the longest palindrome
//         while (l > 0 && r < n - 1 && s[l - 1] === s[r + 1]) {
//             l--;
//             r++;
//         }

//         const newlen = r - l + 1;
//         if (newlen > maxlen) {
//             maxlen = newlen;
//             minstart = l;
//         }
//     }

//     return s.substring(minstart, minstart + maxlen);
// }
