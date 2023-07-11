const lengthOfLastWord = (s) => {
    const splitString = s.split(' ');
    const filter = splitString.filter(space => 
        space !== ''
    )
    return filter[filter.length - 1].length
}

module.exports = { lengthOfLastWord }

//https://leetcode.com/problems/length-of-last-word/description/