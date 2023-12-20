const mean = (array) => {

    let string = "";
    let meanAdd = 0;
    let count = 0;

    array.forEach((element) => {
        if(/[a-zA-Z]/.test(element)) {
            string += element;
        } else 
        if(/[0-9]/.test(element)) {
            count++;
            meanAdd += Number(element);
        };
    });

    return [meanAdd / count, string]
};

module.exports = { mean };

//https://www.codewars.com/kata/56f7493f5d7c12d1690000b6/train/javascript