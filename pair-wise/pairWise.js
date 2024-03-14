const pairWise = (arr, n) => {
    let count = 0;
    const array = [...arr];

    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if(i === j) break;
            if(array[i] + array[j] === n) {
                array.splice(i, 1, NaN);
                array.splice(j, 1, NaN);
                count += i + j;
            };
        };
    };

    return count;
};

module.exports = { pairWise };

//https://www.codewars.com/kata/58afa8185eb02ea2a7000094/train/javascript