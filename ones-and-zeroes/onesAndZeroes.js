const binaryArrayToNumber = (array) => {

    return parseInt([...array].join(''), 2);

};

module.exports = { binaryArrayToNumber };

// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript