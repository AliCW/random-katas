const numbersOfLetters = (number) => {
    const dict = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6:'six',
        7:'seven',
        8: 'eight',
        9: 'nine',
        0: 'zero',
    };

    const splitNum = [number.toString().split('').map((element) => {
        return dict[Number(element)]
    }).join('')];

    for(let i = 0; i < splitNum.length; i++) {
        if(splitNum[i].length < 10){
            if(dict[splitNum[i].length] === splitNum[i]) {
                return splitNum;
            };
            splitNum.push(dict[splitNum[i].length]);
        } else {
            let push = '';
            for(let j = 0; j < splitNum[i].length.toString().length; j++){
                push += dict[splitNum[i].length.toString()[j]];
            };
            splitNum.push(push);
        };
    };
};

module.exports = { numbersOfLetters };

// https://www.codewars.com/kata/599febdc3f64cd21d8000117/train/javascript