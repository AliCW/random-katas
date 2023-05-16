function reverseVowels(string) {
    let splitString = string.split('');
    let vowelArray = [];
    let indexArray = [];
    for (let i = 0; i < string.length; i++) {
        if (splitString[i] === 'a' || 
        splitString[i] === 'A' || 
        splitString[i] === 'e' ||
        splitString[i] === 'E' || 
        splitString[i] === 'i' || 
        splitString[i] === 'I' || 
        splitString[i] === 'o' ||
        splitString[i] === 'O' || 
        splitString[i] === 'u' ||
        splitString[i] === 'U' 
        ) {
            indexArray.push(i)
            vowelArray.push(splitString[i]);
        }
    }
    vowelArray.reverse()
    for (let j = 0; j < indexArray.length; j++) {
        splitString.splice(indexArray[j], 1, vowelArray[j])
    }
    return splitString.join('')
}


module.exports = {
    reverseVowels
}

//split string into array of letters
//find vowels & splice to new array - copy indexes
//reverse vowel array & add vowels per copied index

//https://www.codewars.com/kata/585db3e8eec141ce9a00008f/train/javascript