const higherOrLower = (string) => {
    stringArr = string.split(' ');

    return Math.max(... stringArr) + " " + Math.min(... stringArr);
};

module.exports = { higherOrLower };

//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript