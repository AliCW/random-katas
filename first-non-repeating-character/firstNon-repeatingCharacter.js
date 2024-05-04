const firstNonRepeatingLetter = (string) => {
    if (string.length === 1) return string;

    const dict = {};
    const init = [];
    string.toLowerCase().split('').forEach((character, index) => {
        if(dict[character] !== undefined) dict[character] += 1;
        else { dict[character] = 1 };
        init.push([string[index], index]);
    });

    const singles = [];
    for (let key in dict) {
        if(dict[key] === 1) singles.push(key);
    };

    for(let i = 0; i < init.length; i++) {
        if(singles.includes(init[i][0].toLowerCase())) return init[i][0];
    };

    return "";
};

module.exports = { firstNonRepeatingLetter };

//https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
