function permuteAPalindrome(input) {
    if (input.length < 2) {
        return true
    }
    const map = {}
    const flattenString = input.toLowerCase()
    for(let i = 0; i < flattenString.length; i++) {
        const char = flattenString[i]
        if(char !== " ") {
            map[char] = map[char] ? map[char] + 1 : 1;
        }
    }    
    let countOdd = 0
    for(let char in map) {
        if(map[char] === 1 || map[char] % 2 !== 0) {
            countOdd++
        }
    }
    if(countOdd > 1) {
        return false
    } else {
        return true
    }
}

//https://www.codewars.com/kata/58ae6ae22c3aaafc58000079/train/javascript

module.exports = { permuteAPalindrome }

//Each character should have a pair with only one exception for odd numbers
//use an object to map the characters as keys and values as count 
