function spinLongishWords(string) {
    const splitString = string.split(' ');
    const reverseIndices = [];
    const reverseWords = [];
    for (let i = 0; i < splitString.length; i++) {
        if(splitString[i].length >= 5){
            reverseWords.splice(0, 0, splitString[i]);
            reverseIndices.push(i)
        }
    }
    reverseWords.reverse();
    for (let j = 0; j < reverseIndices.length; j++) {
        splitString.splice(reverseIndices[j], 1, reverseWords[j].split('').reverse().join(''))
    }
    return splitString.join(' ')
}

module.exports = { spinLongishWords }

//https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript