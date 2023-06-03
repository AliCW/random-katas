function lowestNotThere(array) {
    const arrayCopy = [...array];
    if (Math.max(...arrayCopy) <= 0) return 1; //checks for negative numbers - return 1 if all negative
    arrayCopy.forEach((element, index) => { //delete negative numbers
        if (element <= 0) {
            arrayCopy.splice(index, 1);
        };
    });
    const orderArray = arrayCopy.sort((a, b) => a - b); //sort numerically
    if (orderArray[orderArray.length - 1] === orderArray[orderArray.length - 2]) {
        return orderArray[orderArray.length - 1] - 1; //if the two highest are duplicates, return it - 1
    };
    const uniqueArray = [... new Set(orderArray)]; //copy the new sorted array
    let seq = false;
    orderArray.reverse(); //reverse for the sequence detection loop
    uniqueArray.reverse();
    for (let i = 0; i <= orderArray.length - 2; i++) {
        if (orderArray[i] === orderArray[i + 1] + 1) {
            seq = true; //if they are in sequence e.g [1, 2, 3, 4, 5, 6]
        } else {
            return uniqueArray[0] - 1; //not sequential, return the highest number - 1
        };
    };
    if (seq === true) {
        return uniqueArray[0] + 1; //if sequential, return the highest number plus 1
    };
};

module.exports = { lowestNotThere };