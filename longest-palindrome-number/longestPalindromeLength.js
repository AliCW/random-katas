const longestPalindrome = (str) => {
    
    const dict = {};
    let output = 0;    
    let check = str.toLowerCase();
    let string = str.toLowerCase();

    string = string.split('').filter((element) => {
        if (/[a-z0-9]/g.test(element) === true) {
            return element;
        };
    });
    string = string.join('');

    check = check.split('').filter((element) => {
        if (/[a-z0-9]/g.test(element)) {
            return element;
        };
    });
    check = check.reverse();

    if(check.join('') === string) return check.length;

    check.forEach((element) => {
        if(dict[element] !== undefined) {
            dict[element] += 1;
        } else {
            dict[element] = 1;
        };
    });

    for(let key in dict) {
        if(dict[key] % 2 === 0) {
            output += dict[key];
        } else
        if(dict[key] >= 3) {
            output += dict[key] - 1;
        };
    };
    
    return output + 1;

};

module.exports = { longestPalindrome };

//https://www.codewars.com/kata/5a0178f66f793bc5b0001728/train/javascript