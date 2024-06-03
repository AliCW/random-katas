const uniq = (array) => {
    if(array.length === 1) return [array[0]];

    return array.filter((element, index) => 
        element === null || element !== array[index + 1]
    );

};

module.exports = { uniq };



// return array.filter((element, index) => {
//     if(element === null) return element;
//     if(element !== array[index + 1]) return element;
// }); // filters the null values & fails test 4

//https://www.codewars.com/kata/52249faee9abb9cefa0001ee/train/javascript