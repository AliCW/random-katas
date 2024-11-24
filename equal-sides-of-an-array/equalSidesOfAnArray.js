const findEvenIndex = (array) => {

    for(let i = 0; i < array.length; i++) {
        let left = 0;
        let right = 0;
        for(let j = 0; j < array.length; j++) {
            if(i > j) left += array[j];
            else if (j > i) right += array[j];
        };

    if (left === right) return i;
    };

    return -1;
};

module.exports = { findEvenIndex };


//https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
