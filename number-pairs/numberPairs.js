const getLargeNumbers = (array1, array2) => {

    return array1.map((element, index) => {
        if(element > array2[index]){
            return element;
        } else {
            return array2[index];
        };
    });

};

module.exports = { getLargeNumbers };

//https://www.codewars.com/kata/563b1f55a5f2079dc100008a/train/javascript