const encode = (string) => {
    const pattern = {
        "a": 1,
        "e": 2,
        "i": 3,
        "o": 4,
        "u": 5,
    };

    return string.split('').map((letter) => {
        if(pattern[letter] !== undefined){
            return pattern[letter];
        } else {
            return letter;
        };
    }).join('');
};

const decode = (string) => {
    const pattern = {
        "1": "a",
        "2": "e",
        "3": "i",
        "4": "o",
        "5": "u",
    };

    return string.split('').map((letter) => {
        if(pattern[letter] !== undefined){
            return pattern[letter];
        } else {
            return letter;
        };
    }).join('');
};

module.exports = { encode, decode };

//https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript



// dryer solution:

// function encode(string){
//   var vowelMapping = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5};
//   return codeStringGivenMapping(string, vowelMapping);
// }

// function decode(string){
//   var vowelMapping = {'1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u'};
//   return codeStringGivenMapping(string, vowelMapping); 
// }

// function codeStringGivenMapping(string, mapping){
//   return string.split('').map(function(char){
//     return mapping[char] || char;
//   }).join(''); 
// }