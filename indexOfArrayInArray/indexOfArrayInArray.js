const searchArray = (arrays, query) => {
    if(!Array.isArray(query) || query.length !== 2) throw new Error("Invalid Query");

    for(let i = 0; i < arrays.length; i++){
        if(arrays[i].length !== 2) throw new Error("Invalid Length Of Array In Array List");
        if(arrays[i].length === query.length) {
            let exit = false;
            for(let j = 0; j < arrays[i].length; j++) {
                if(arrays[i][j] !== query[j]) {
                    exit = false;
                    break;
                };
                exit = true;
            };
            if(exit) return i;
        };
    };
    return -1;
};

module.exports = { searchArray };

//https://www.codewars.com/kata/5783ef69202c0ee4cb000265/train/javascript