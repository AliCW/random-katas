const isAlt = (string) => {
    let initial = 0;
    if(/[\a\e\i\o\u]/g.test(string[0])) initial = 1;

    check = [initial];
    for(let i = 1; i < string.length; i++) {
        if(/[\a\e\i\o\u]/g.test(string[i])) check.push(1);
        else { check.push(0); };
    };

    for(let j = 0; j < check.length - 1; j++) {
        if(check[j] === check[j + 1]) return false;
    };

    return true;
};

module.exports = { isAlt };

//https://www.codewars.com/kata/59325dc15dbb44b2440000af/train/javascript