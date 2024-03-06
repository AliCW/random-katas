const simpleFrequencySort = (arr) => {

    let dict = {};
    let output = [];
    let sort = [];

    arr.forEach((element) => {
        if (dict[element] !== undefined) {
            dict[element] += 1;
        } else {
           dict[element] = 1;
        };
    });

    for (let key in dict) {
        sort.push([key, dict[key]])
    };

    sort = sort.sort((a, b) => {
        return b[1] - a[1];
    });

    sort.forEach((element) => {
        for(let i = 0; i < element[1]; i++) {
            output.push(Number(element[0]))
        };
    });

    return output;
};

module.exports = { simpleFrequencySort };

//https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc/train/javascript
