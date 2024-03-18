const findOutlier = (arr) => {

    let oddValues = [];
    let evenValues = [];

    arr.forEach((element) => {
        if(element % 2 === 0) {
            evenValues.push(element);
        } else {
            oddValues.push(element);
        };
    });

    if(evenValues.length > oddValues.length) {
        return oddValues[0];
    };  
    
    return evenValues[0];

};


//https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

// const findOutlier = (arr) => {

//     const evenValues = arr.filter(element => element % 2 === 0);
//     const oddValues = arr.filter(element => element % 2 !== 0);

//     if(evenValues.length > oddValues.length) {
//         return oddValues[0];
//     };  
    
//     return evenValues[0];
// }


module.exports = { findOutlier };