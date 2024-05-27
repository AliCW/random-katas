const firstSmallest = (array, n) => {
    const spread = [...array];
    const indices = [];
    const smallest = [];

    for(let i = 0; i < n; i++){
        indices.push(spread.indexOf(Math.min(...spread)));
        spread.splice(spread.indexOf(Math.min(...spread)), 1, Math.max(...spread) + 1);
    };

    indices.sort((a, b) => { return a - b }).forEach((element) => {
        smallest.push(array[element]);
    });
    return smallest;
};

module.exports = { firstSmallest };

//https://www.codewars.com/kata/5aec1ed7de4c7f3517000079/train/javascript