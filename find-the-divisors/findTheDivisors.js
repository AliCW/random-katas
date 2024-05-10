const findDivisors = (number) => {
    const divisors = [];
    for(let i = 2; i < number; i++){
        if(Number.isInteger(number / i)) divisors.push(i);
    };

    if(divisors.length > 0) return divisors;
    return number + " is a prime number";
};

module.exports = { findDivisors };

//https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript