const removeDuplicateFromSortedArray = (nums) => {
    let copy = [... nums];
    let output = [copy[0]];
    const count = copy.length;
    let unique = {
        0: copy[0],
    };

    for(let i = 1; i < copy.length; i++) {
        if (output.includes(copy[i]) === false) {
            unique[i] = copy[i];
            output.push(copy[i]);
        } 
    };

    for(let j = output.length; j < count; j++) {
        output.push('_');
    };

    for(let k = 0; k < count; k++) {
        nums.unshift(output[k]);
        nums.pop();
    };
    
    nums.reverse();

    return Object.keys(unique).length;
};

module.exports = { removeDuplicateFromSortedArray }

//https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

