const highestRank = (arr) => {
    let dict = {};
    let outputSort = [];

    arr.forEach((element) => {
        dict[element] = 0;
    });
    
    for(let i = 0; i < arr.length; i++) {
        dict[arr[i]] += 1;
    };

    for(let key in dict) {
        outputSort.push([key, dict[key]])      
    };

    outputSort.sort((a, b) => {
        return a[1] - b[1];
    });

    return Number(outputSort[outputSort.length - 1][0]);
};

module.exports = { highestRank };

//https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript