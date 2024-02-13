const solve = (str) => {

    const spaceIndices = [];
    let chars = str.split('');

    for(let i = 0; i < str.length; i++) {
        if(str[i] === ' ') {
            spaceIndices.push(i);
        }
        if(chars[i] === ' '){
            chars.splice(i, 1);
        }
    }

    chars = chars.reverse();

    for(let j = 0; j < spaceIndices.length; j++) {
        chars.splice(spaceIndices[j], 0, " ");
    }

    return chars.join('');

};

module.exports = { solve };

//https://www.codewars.com/kata/5a71939d373c2e634200008e/javascript
