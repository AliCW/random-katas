const isLeapYear = (year) => {
    const divideByFour = year / 4;
    const divideByOneHundred = year / 100;
    const divideByFourHundred = year / 400;
    if(Number.isInteger(divideByFourHundred) === true) {
        return true;
    }
    else if(Number.isInteger(divideByOneHundred)) {
        return false;
    }
    else if (Number.isInteger(divideByFour) === true) {
        return true;
    }
    return false;
};

module.exports = { isLeapYear };


//https://www.codewars.com/kata/526c7363236867513f0005ca/train/javascript