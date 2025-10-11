const mineLocation = (array) => {
    const output = [];

    array.forEach((element, index) => {
        element.forEach((innerElement, innerIndex) => {
            if(innerElement === 1){
                output.push(index, innerIndex);
            };
        });
    });
    
    return output;
};

module.exports = { mineLocation };

//https://www.codewars.com/kata/528d9adf0e03778b9e00067e/train/javascript