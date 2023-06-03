function solution(roman) {
    let splitRoman = roman.split('');
    let total = 0;
    splitRoman.forEach(function(letter, index) {
        if (letter === 'I') {
            if (splitRoman[index + 1] === 'V') {
                total += 4;
            } else if (splitRoman[index + 1] === 'X') {
                total += 9;
            }
                else {
                total += 1;
            }};
        if (letter === 'V') {
            if (splitRoman[index - 1] === 'I') {
                total += 0;
            } else {
                total += 5;
            }};
        if (letter === 'X') {
            if (splitRoman[index + 1] === 'L') {
                total += 40;
            } 
            else if (splitRoman[index + 1] === 'C') {
                total += 90;
            }
            else if (splitRoman[index - 1] === 'I') {
                total += 0;
            } else {
                total += 10;
            }};
        if (letter === 'L') {
            if (splitRoman[index - 1] === 'X') {
                total += 0;
            }            
            else {
                total += 50;
            }};
        if (letter === 'C') {
            if (splitRoman[index + 1] === 'D') {
                total += 400;
            } 
            else if (splitRoman[index + 1] === 'M') {
                total += 900;
            }
            else if (splitRoman[index - 1] === 'X') {
                total += 0;
            }            
            else {
                total += 100;
            }};
        if (letter === 'D') {
            if (splitRoman[index - 1] === 'C') {
                total += 0;
            } else {
                total += 500;
            }};
        if (letter === 'M') {
            if (splitRoman[index - 1] === 'C') {
                total += 0;
            }
             else {
                total += 1000;
            }};
    });
    return total;
};

module.exports = { solution }

//split string into array of characters
//foreach character, add the correct number to a culmilative total
//account for joint numeral combinations - e.g. 9 (IX) 4 (IV) etc
