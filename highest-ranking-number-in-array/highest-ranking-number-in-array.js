const highestRank = (array) => {

    const dict = {}; 
    array.forEach((element) => {
        if(dict[element] !== undefined) dict[element] += 1;
        else { dict[element] = 1};
    });
    
    const outputSort = [];
    for(let key in dict) {
        outputSort.push([Number(key), dict[key]]);  
    };

    outputSort.sort((a, b) => {
        return a[1] - b[1];
    });

    return Number(outputSort[outputSort.length - 1][0]);
};

module.exports = { highestRank };

//https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript