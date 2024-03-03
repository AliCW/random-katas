const palindrome = (string) => {
    if (string.length <= 1) return true;
    if (string.split('').reverse().join('') === string) return true;

    const flatten = string.split('').map((element) => {
        return element.toLowerCase();
    });

    let filtered = flatten.filter((element) => {
        if(/[a-z0-9]/g.test(element) === true) {
            return element;
        };
    });

    let check = [...filtered];

    if(check.reverse().join('') === filtered.join('')) return true;

    return false;
};

module.exports = { palindrome };

//https://www.codewars.com/kata/53046ceefe87e4905e00072a/train/javascript

