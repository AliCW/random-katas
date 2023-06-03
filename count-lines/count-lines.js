function countLines(array) {
    if (array.length === 0) return [];
    let arrayCopy = [...array];
    let output = [];
    arrayCopy.forEach(function(element, index){
        let append = index + 1 + ': ';
        let outputString = append.concat(element);
        output.push(outputString);
    })
    return output;
};

module.exports = { countLines };

//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript