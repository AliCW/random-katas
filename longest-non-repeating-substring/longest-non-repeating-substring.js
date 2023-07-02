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
