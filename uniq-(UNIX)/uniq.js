const uniq = (array) => {
    if(array.length === 1) return [array[0]];

    const out = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] !== array[i + 1]) out.push(array[i]);
    };

    return out;
};

module.exports = { uniq };


//https://www.codewars.com/kata/52249faee9abb9cefa0001ee/train/javascript