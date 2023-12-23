const isIntArray = (arr) => {
    if(Array.isArray(arr) === false) return false;
    if(arr.length === 0) return true;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === null || arr[i] === undefined) return false;
        if(typeof arr[i] === 'string') return false;
        if(arr[i] % 1 !== 0) return false;
        if(isNaN(arr[i])) return false;
    };
    return true;
};

module.exports = { isIntArray };

//https://www.codewars.com/kata/52a112d9488f506ae7000b95/train/javascript