const each = (number, array) => {

    if(number === 0 || array.length === 0) return [];

    const output = [];

    if(number > 0) {
        for(let i = number - 1; i < array.length; i += number) {
            output.push(array[i]);
        };
    } else {
        const copy = [...array.reverse()];
        const pos = Math.abs(number);
        for(let i = pos - 1; i < copy.length; i += pos) {
            output.push(copy[i]);
        };
    };

    return output;

};

module.exports = { each };

//https://www.codewars.com/kata/5a077e8106d5b654b800004f/train/javascript