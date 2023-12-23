const incrementString = (string) => {
    let endingNum = "";
    let split = string.split("").reverse();
    let prefix = "";
    let detect = 0;

    if(/[A-Za-z]/.test(split[0]))  return string += '1';

    if(/[0-8]/.test(split[0])) {
        endingNum = Number(split[0]);
        endingNum ++;
        split.shift();
        split.unshift(endingNum.toString());
        return split.reverse().join("");
    };

    for(let i = 0; i < split.length; i++) {
        if(/[^0-9]/.test(split[i])) {
            detect++;
        };
        if(split[i] === "9" && detect === 0) {
            endingNum += "9";
        } else {
            prefix += split[i];
        };
    };

    let append = Number(endingNum) + 1;

    if(prefix.charAt(0) === '0') {
        prefix = prefix.split("");
        prefix.shift();
        return prefix.reverse().join("") + append;
    };

    return prefix.split("").reverse().join("") + append;
};

module.exports = { incrementString };

//https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript