const deleteNth = (arr, n) => {
    let duplicate = [...arr];
    let output = [];
    let dict = {};
    for(let i = 0; i < arr.length; i++) {
        output.push(duplicate[i]);
        dict[arr[i]] = 1 + (dict[arr[i]] || 0);
        if(dict[arr[i]] > n) {
            output.pop();
        };
    };
    return output;
};

module.exports = { deleteNth };