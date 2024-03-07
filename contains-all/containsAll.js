const containsAll = (arr1, arr2) => {

    for(let i = 0; i < arr2.length; i++) {
        if(arr1.includes(arr2[i]) === false) return false;
    };

    return true;

};

module.exports = { containsAll };

//https://www.codewars.com/kata/5143cc9694a24abcd2000001/train/javascript
