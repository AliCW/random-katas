const differenceOfSquares = (number) => {
    let count = 0;
    let countSquares = 0;

    for(let i = 1; i <= number; i++){
        count += i;
        countSquares += i * i;
    };

    return count * count - countSquares;
};

module.exports = { differenceOfSquares };


//https://www.codewars.com/kata/558f9f51e85b46e9fa000025/train/javascript