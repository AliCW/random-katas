const solution = (number) => {

    let output = 0;

    for(let i = number - 1; i >= 2; i--) {
        let checkThree = i / 3;
        let checkFive = i / 5;
        if(checkThree % 1 === 0) {
            output += i;
        } else 
        if(checkFive % 1 === 0) {
            output += i;
        };
    };
    return output;
};

//https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

module.exports = { solution };