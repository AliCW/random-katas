const lengthOfLongestSubstring = function(s) {
    let setCheck = new Set();
    let count = 0;
    let checkMax = 0;

    if (s.length === 0) return checkMax;
    if (s.length === 1) return checkMax + 1;

    for(let i = 0; i < s.length; i++) {
        while(setCheck.has(s[i])) {
            setCheck.delete(s[count]);
            count++;
        };
        setCheck.add(s[i]);
        checkMax = Math.max(checkMax, i - count + 1);
    };
    return checkMax;
};

module.exports = { lengthOfLongestSubstring }

// for(let j = 0; j < stringArray.length; j++) {

// }

//need to re-do this - start by creating a left & right index as you iterate
//find duplicate indexes?


//loop through the string - increment right index per turn & push each letter to new array
//check if the next letter is in the array - if not, then carry on
//if already there, set right and left index to i(loop) and reset the letter array
//return the difference between the chars

//you need to implement a double loop so that it can go back when a duplicate is found??