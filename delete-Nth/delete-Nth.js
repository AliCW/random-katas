const deleteNth = (arr, n) => {
    const output = [];
    const dict = {};
    for(let i = 0; i < arr.length; i++) {
        
        dict[arr[i]] = 1 + (dict[arr[i]] || 0);
        if(dict[arr[i]] > n) {
            continue;
        } else { output.push(arr[i]); };
    };
    return output;
};

module.exports = { deleteNth };

//https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript