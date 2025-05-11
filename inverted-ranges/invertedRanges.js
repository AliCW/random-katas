const invertedRanges = (array) => {
    if(array.length === 0) return [[0, 100]];
    if(array[0][0] === 0 && array[array.length-1][1] === 100) return [];
    
    const output = [];
    
    if(array[0][0] !== 0){
        for(let i = 0; i <= array.length - 1; i++){
            if(i === 0){
                output.push([0, array[i][0] - 1]);
            };
            if(i === array.length - 1){
                output.push([array[i][1] + 1 ,100]);
            }
            else {
                output.push([array[i][1] + 1, array[i + 1][0] - 1]);
            };
        };
    } else {
        for(let j = 0; j <= array.length - 1; j++){
            if(j === 0){
                output.push([array[j][1] + 1, array[j + 1][0] - 1]);
                continue;
            };
            if(j === array.length - 1){
                output.push([array[j][1] + 1 ,100]);
                continue;
            }
            else {
                output.push([array[j][1] + 1, array[j + 1][0] - 1]);
            };
        };
    };

    return output;
};

module.exports = { invertedRanges };

//https://www.codewars.com/kata/60db06ded6c39e002ee35910/train/javascript
