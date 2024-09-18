const digitalRoot = (number) => {

    const sum = (num) => {
        let output = 0;
        num.toString().split('').forEach((element) => {
            output += Number(element);
        });
        return output;
    };

    let initialSum = sum(number);
    if(initialSum < 9){
        return initialSum;
    };

    let secondSums = 0;
    do {
        secondSums = sum(initialSum);
        if(secondSums > 9){
            secondSums = sum(secondSums);
        };
    } while (secondSums > 9);

    return secondSums;
};

module.exports = { digitalRoot };

//https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

